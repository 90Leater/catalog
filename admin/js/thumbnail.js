import {
    storage,
    ref,
    uploadBytes,
    getDownloadURL
}
from "../../firebase-admin.js";

const uploadBox =
document.getElementById(
"thumbnailUpload"
);

const fileInput =
document.getElementById(
"thumbnailFile"
);

const preview =
document.getElementById(
"thumbnailPreview"
);

const text =
document.getElementById(
"thumbnailText"
);

uploadBox.addEventListener(
"click",
()=>{

fileInput.click();

}
);

fileInput.addEventListener(
"change",
previewThumbnail
);

export function previewThumbnail(){

const file =
fileInput.files[0];

if(file.size > 2 * 1024 * 1024){

    alert(
        "Ukuran gambar maksimal 2 MB."
    );

    fileInput.value = "";

    return;

}

const allowed =

[
"image/jpeg",
"image/png",
"image/webp"
];

if(

!allowed.includes(
file.type
)

){

alert(
"Hanya JPG, PNG, dan WEBP."
);

fileInput.value="";

return;

}

const reader =
new FileReader();

reader.onload =
event=>{

preview.src =
event.target.result;

preview.hidden =
false;

text.hidden =
true;

};

reader.readAsDataURL(file);

}

export function clearThumbnail(){

preview.src="";

preview.hidden=true;

text.hidden=false;

fileInput.value="";

}

export function getThumbnailFile(){

return fileInput.files[0];

}

export async function uploadThumbnail(
    productId
){

    const file =
    fileInput.files[0];

    if(!file){

        return "";
    }

    const extension =
    file.name
    .split(".")
    .pop();

    const storageRef =
    ref(

        storage,

        `products/${productId}/thumbnail.${extension}`

    );

    await uploadBytes(

        storageRef,

        file

    );

    return await getDownloadURL(
        storageRef
    );

}
