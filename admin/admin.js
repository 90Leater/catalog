document
.getElementById('addProduct')
.addEventListener(
'click',
()=>{
    alert('Fitur Tambah Produk akan dibuat pada tahap berikutnya.');
}
);

document
.getElementById('importJson')
.addEventListener(
'click',
importProducts
);

async function importProducts(){

    const confirmImport =
    confirm(
        'Import semua produk ke Firestore?'
    );

    if(!confirmImport) return;

    try{

        const response =
        await fetch('../product.json');

        const products =
        await response.json();

        const status =
        document.getElementById(
            'importStatus'
        );

        let success = 0;

        for(const product of products){

            await setDoc(

                doc(
                    db,
                    'products',
                    String(product.id)
                ),

                {
                    id: product.id,
                    kode: product.kode,
                    nama: product.nama,
                    kategori: product.kategori,
                    folder: product.folder,
                    thumbnail: product.thumbnail,
                    warna: product.warna || {},

                    views: 0,
                    active: true,
                    order: product.id,
                    createdAt: serverTimestamp()
                }

            );

            success++;

            if(status){

                status.textContent =
                `Mengupload ${success} dari ${products.length}`;

            }

        }

        if(status){

            status.textContent =
            '✅ Import selesai';

        }

        alert(
            `${success} produk berhasil diimport.`
        );

    }catch(error){

        console.error(error);

        alert(
            'Import gagal: ' + error.message
        );

    }

}
