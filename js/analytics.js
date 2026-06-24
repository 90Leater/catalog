function trackProductView(productId){

    let views =
    JSON.parse(
        localStorage.getItem(
            'productViews'
        )
    ) || {};

    views[productId] =
    (views[productId] || 0) + 1;

    localStorage.setItem(
        'productViews',
        JSON.stringify(
            views
        )
    );

}

function getTopViewedProducts(){

    const views =
    JSON.parse(
        localStorage.getItem(
            'productViews'
        )
    ) || {};

    return Object.entries(
        views
    )
    .sort(
        (a,b) =>
        b[1] - a[1]
    )
    .slice(0,5);

}
