let selectedProducts =
    JSON.parse(
    localStorage.getItem('selectedProducts')
    ) || [];
function updateCart(){

    document.getElementById(
    'cartCount'
    ).textContent =

    '📋 ' + selectedProducts.length + ' Produk Dipilih';

    localStorage.setItem(
        'selectedProducts',
        JSON.stringify(selectedProducts)
    );
    renderSelectedProducts();

}
function renderSelectedProducts(){

    const container =
    document.getElementById(
        'selectedProductsList'
    );

    if(!container) return;

    container.innerHTML = '';

    if(
    selectedProducts.length === 0
    ){

        container.innerHTML =
        '<p>Belum ada produk dipilih</p>';

        return;

    }

    selectedProducts.forEach(id => {

        const product =
        products.find(
            p => p.id === id
        );

        if(!product) return;

        const card =
        document.createElement(
            'div'
        );

        card.className =
        'recent-card';

        card.innerHTML = `
            <img
            src="Images/${product.folder}/${product.thumbnail}"
            loading="lazy">

            <p>${product.nama}</p>
        `;

        card.addEventListener(
            'click',
            () => {

                const index =
                products.findIndex(
                    p => p.id === product.id
                );

                openProduct(
                    product,
                    index
                );

            }
        );

        container.appendChild(
            card
        );

    });

}

document
.getElementById('cartWhatsapp')
.addEventListener(
'click',
() => {

    if(selectedProducts.length === 0){
        alert('Pilih produk terlebih dahulu');
        return;
    }

    let pesan =
    'Halo GO.Leather%0A%0ASaya ingin tanya harga:%0A%0A';

    selectedProducts.forEach(id => {

        const product =
        products.find(
            p => p.id === id
        );

        if(product){

            pesan +=
            '• ' +
            product.nama +
            ' (' +
            product.kode +
            ')%0A';

        }

    });

    window.open(
        'https://wa.me/6288973623416?text=' +
        pesan,
        '_blank'
    );

});
