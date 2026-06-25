import {
    db,
    collection,
    onSnapshot,
    doc,
    deleteDoc
}
from "../../firebase-admin.js";

const productTable =
document.getElementById(
    "productTable"
);

const totalProducts =
document.getElementById(
    "totalProducts"
);

export function listenProducts(){

    onSnapshot(

        collection(
            db,
            "products"
        ),

        (snapshot)=>{

            productTable.replaceChildren();

            let total = 0;

            snapshot.forEach(doc=>{

                total++;

                createProductRow(
                    doc.data()
                );

            });

            totalProducts.textContent =
            total;

        },

        (error)=>{

            console.error(error);

        }

    );

}

function createProductRow(product){

    const row =
    document.createElement("tr");

    row.innerHTML = `
        <td>${product.id}</td>

        <td>${product.nama}</td>

        <td>${product.kategori}</td>

        <td>
            ${product.active ? "Aktif" : "Nonaktif"}
        </td>

        <td>

            <button
                class="editBtn"
                data-id="${product.id}">
                Edit
            </button>

            <button
                class="deleteBtn"
                data-id="${product.id}">
                Hapus
            </button>

        </td>
    `;

    productTable.appendChild(row);

}

document.addEventListener(
    "click",
    async (event)=>{

        if(
            !event.target.classList.contains(
                "deleteBtn"
            )
        ){
            return;
        }

        const id =
        event.target.dataset.id;

        const confirmDelete =
        confirm(
            "Yakin ingin menghapus produk ini?"
        );

        if(!confirmDelete){
            return;
        }

        try{

            await deleteDoc(
                doc(
                    db,
                    "products",
                    id
                )
            );

            alert(
                "Produk berhasil dihapus."
            );

        }catch(error){

            console.error(error);

            alert(
                "Gagal menghapus produk."
            );

        }

    }
);
