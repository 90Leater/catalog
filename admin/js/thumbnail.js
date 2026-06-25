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

if(!file){

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
