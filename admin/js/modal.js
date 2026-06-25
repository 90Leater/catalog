let editingProductId = null;

const modal =
document.getElementById("productModal");

const closeButton =
document.getElementById("closeModal");

const addButton =
document.getElementById("addProduct");

addButton.addEventListener(
    "click",
    openModal
);

closeButton.addEventListener(
    "click",
    closeModal
);

export function openModal(reset = true){

    if(reset){

        clearForm();

        editingProductId = null;

        document.getElementById(
            "modalTitle"
        ).textContent =
        "Tambah Produk";

    }

    modal.classList.remove(
        "hidden"
    );

}

export function closeModal(){

    clearForm();

    editingProductId = null;

    document.getElementById(
        "modalTitle"
    ).textContent =
    "Tambah Produk";

    modal.classList.add(
        "hidden"
    );

}

export function clearForm(){

    document.getElementById(
        "productName"
    ).value = "";

    document.getElementById(
        "productCode"
    ).value = "";

    document.getElementById(
        "productCategory"
    ).value = "";

    document.getElementById(
        "productFolder"
    ).value = "";

}

export function setEditingProduct(id){

    editingProductId = id;

}

export function getEditingProduct(){

    return editingProductId;

}
