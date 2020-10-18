// const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
// const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

// //
const catalog = {
    items: [],
    basket: null,
    container: null,
    url: 'https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/catalog.json',
    imgFTPurl: 'https://raw.githubusercontent.com/IlyaVoronOFF/pictureStatic/master/Brand/product/',
    init() {
        this.container = document.querySelector('#catalog-index');
        this.basket = basket;

        //this.items = getItems();
        this._get(this.url)
            .then(items => {
                this.items = items;
            })
            .then(() => {
                this._render();
                this._handleEvents();
            })
    },
    _get(url) {
        return fetch(url).then(d => d.json());
    },
    _handleEvents() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add' || evt.target.parentNode.name == 'add') {
                let item = {
                    productId: evt.target.dataset.id,
                    productImg: evt.target.dataset.img,
                    productName: evt.target.dataset.name,
                    productPrice: +evt.target.dataset.price,
                };
                this.basket.add(item);
            }
        })
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            //let imgURL = `${this.imgFTPurl}${index + 1}.jpg`;
            htmlStr += `
                  <div class="product-item">
                    <img src="${item.productImg}" alt="${item.productId}">
                    <div class="hover-bg"><button 
                    name="add" 
                    data-name="${item.productName}"
                    data-price="${item.productPrice}"
                    data-img="${item.productImg}"
                    data-id="${item.productId}"
                    ><i class="fas fa-shopping-cart"></i> Add to cart</button></div>
                    <div class="product-item__desc">
                        <div class="product-item__name" name="bascket-click"><a href="#">${item.productName}</a></div>
                        <div class="product-item__detail">
                            <div class="product-item__price">$${item.productPrice}.00</div>
                            <div class="product-item__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                </div>
                        `;
        });
        this.container.innerHTML = htmlStr;
    }
}

catalog.init();
//

// function createNewItem(name, price) {
//     return {
//         productName: name,
//         productPrice: price
//     }
// }

// function getItems() {
//     return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES[index]));
// }