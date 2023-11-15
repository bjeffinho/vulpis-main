//funcionamento do botão buscar produtos, pelos cards do bootstrap aonde estão


const searchInput = document.querySelector('.form-control');

searchInput.addEventListener('input', handleSearch);

const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleSearch();
});

function handleSearch() {
    const searchTerm = removeAccents(searchInput.value.toLowerCase().trim());
    const products = document.querySelectorAll('.card');


    const matchingProducts = Array.from(products).filter((product) => {
        const productText = removeAccents(product.innerText.toLowerCase().trim());
        return productText.includes(searchTerm);
    });

    // Se não houver correspondência não faz nada
    if (matchingProducts.length === 0) {
        return;
    }

    products.forEach((product) => {
        const isMatch = matchingProducts.includes(product);

        if (isMatch) {
            product.classList.add('product-visible');
            product.classList.remove('product-enter');
        } else {
            product.classList.remove('product-visible');
            product.classList.add('product-enter');
        }
    });


    updateProductDisplay();
}

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function updateProductDisplay() {
    const visibleProducts = document.querySelectorAll('.product-visible');
    const hiddenProducts = document.querySelectorAll('.product-enter');

    let index = 0;


    visibleProducts.forEach((product) => {
        product.style.order = index;
        product.style.left = "0";
    });


    hiddenProducts.forEach((product) => {
        product.style.order = index;
        index++;
    });
}
