fetch('product.json')
.then(res => res.json())
.then(products => {

    const container = document.getElementById('products');

    products.forEach(product => {

        const imagePath =
        `Images/${product.folder}/${product.warna}`;

        const card = `
        <div class="card">
            <img src="${imagePath}" alt="${product.nama}">
            <div class="card-body">
                <h3>${product.nama}</h3>
                <p>${product.kategori}</p>

                <a class="btn"
                href="https://wa.me/6281234567890?text=Saya ingin pesan ${product.nama}"
                target="_blank">
                Tanya Harga
                </a>
            </div>
        </div>
        `;

        container.innerHTML += card;

    });

});
