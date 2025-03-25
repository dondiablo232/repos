document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.querySelector('.sort-select');
    const materialSelect = document.querySelector('.material-select');
    const cardsContainer = document.querySelector('.Cards');

    let products = [
        { id: '1', discount: "скидка", name: 'Ручка дверная', price: 355, material:'metal' },
        { id: '1', discount: "скидка", name: 'Ручка дверная', price: 355, material:'metal' },
        { id: '2',  name: 'Ручка дверная', price: 99, material:'metal' },
        { id: '3',  name: 'Ручка дверная', price: 75, material: 'aluminum' },
        { id: '4',  name: 'Ручка дверная', price: 200, material:'metal' },
        { id: '1',  discount: "скидка", name: 'Ручка дверная', price: 300, material:'metal' },
        { id: '3',  name: 'Ручка дверная', price: 400, material: 'aluminum' },
        { id: '2',  name: 'Ручка дверная', price: 75, material:'metal' },
        { id: '2',  name: 'Ручка дверная', price: 109, material:'metal' },
        { id: '4',  name: 'Ручка дверная', price: 250, material:'metal' },
        { id: '1',  discount: "скидка", name: 'Ручка дверная', price: 210, material:'metal' },
        { id: '3',  name: 'Ручка дверная', price: 345, material: 'aluminum' }
    ];

    let filterMaterial = null;

    function sortAndFilterProducts(sortOrder, filterMaterialParam) {
        filterMaterial = filterMaterialParam === '' ? null : filterMaterialParam;
        
        const filteredProducts = products.filter(product => 
            (!filterMaterial || product.material === filterMaterial)
        );

        const sortedProducts = filteredProducts.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

        return sortedProducts;
    }

    function updateProductList(products) {
        cardsContainer.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            if(product.id === "1"){
                const discountblock = document.createElement('div');
                discountblock.className = 'discount';
                discountblock.textContent = product.discount;
                
                card.appendChild(discountblock);
            }

            const photo = document.createElement('div');
            photo.className = 'photo';
            photo.innerHTML = `<img src="товар${product.id}.png" alt="${product.name}">`;

            const description = document.createElement('div');
            description.className = 'description';

            const name = document.createElement('div');
            name.className = 'product-name';
            name.textContent = product.name;

            const pricePos = document.createElement('div');
            pricePos.className = 'price-pos';
            
            const priceBlock = document.createElement("div");
            priceBlock.className = "price-block"

            const price = document.createElement('div');
            price.className = 'price';
            price.textContent = `${product.price}₽`;
            
            priceBlock.appendChild(price);

            if(product.id === "1" || product.id === "2"){
                const priceThrough = document.createElement('div');
                price.className = 'price-through';
                price.textContent = `${product.price}₽`;
                
                const discountPrice = document.createElement('div');
                discountPrice.className = 'discount-price';
                discountPrice.textContent = `${Math.floor(product.price * 0.85)}₽`;
                
                priceBlock.appendChild(discountPrice);
            }

            const footer = document.createElement('div');
            footer.className = 'product-card-footer';
			footer.innerHTML = '<img src="icon4.png" alt="icon4">';
            footer.innerHTML = '<img src="icon3.png" alt="icon3">';
            

            pricePos.appendChild(priceBlock);
            pricePos.appendChild(footer);

            description.appendChild(name);
            description.appendChild(pricePos);
            
            card.appendChild(photo);
            card.appendChild(description);
            cardsContainer.appendChild(card);
        });
    }

    
    updateProductList(products);

   
    sortSelect.addEventListener('change', function() {
        const sortOrder = this.value;
        const filteredProducts = sortAndFilterProducts(sortOrder, filterMaterial);
        updateProductList(filteredProducts);
    });

    materialSelect.addEventListener("change", function(){
        const filterOrder = this.value;
        const filteredProducts = sortAndFilterProducts('', filterOrder);
        updateProductList(filteredProducts);
    });
});