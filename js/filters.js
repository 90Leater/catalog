function loadCategories(){

const categories =
[...new Set(
    products.map(
        product => product.kategori
    )
)];

kategoriFilter.innerHTML =
'<option value="">Semua Kategori</option>';

categories.forEach(category => {

    const option =
    document.createElement('option');

    option.value =
    category;

    option.textContent =
    category;

    kategoriFilter.appendChild(option);

});
```

}

function filterProducts(){

const keyword =
searchInput.value.toLowerCase();

const kategori =
kategoriFilter.value;

const filtered =
products.filter(product => {

    const cocokKeyword =

        product.nama
        .toLowerCase()
        .includes(keyword)

        ||

        product.kode
        .toLowerCase()
        .includes(keyword);

    const cocokKategori =

        kategori === ''

        ||

        product.kategori === kategori;

    const favorites =
    getFavorites();

    const cocokFavorit =

        currentView === 'all'

        ||

        favorites.includes(
            product.id
        );

    return (
        cocokKeyword &&
        cocokKategori &&
        cocokFavorit
    );

});

currentPage = 1;

if(sortFilter.value === 'az'){

    filtered.sort((a,b) =>
        a.nama.localeCompare(b.nama)
    );

}

if(sortFilter.value === 'za'){

    filtered.sort((a,b) =>
        b.nama.localeCompare(a.nama)
    );

}

renderProducts(
    filtered
);

renderPagination(
    filtered
);

}
