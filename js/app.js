fetch('product.json')
.then(res => res.json())
.then(data => {

    products = data;

    loadCategories();

    renderRecentProducts();

    renderProducts(products);

    renderPagination(products);

    updateFavoriteCount();

    updateCart();

});
