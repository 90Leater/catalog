loadCategories();

currentView = 'all';

document
.getElementById('showAll')
.classList.add('active');

renderRecentProducts();

renderProducts(products);

renderPagination(products);

updateFavoriteCount();

updateCart();
