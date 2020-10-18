//
const basket = {
    items: [],
    containerBasket: null,
    url: 'https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/basket.json',
    imgFTPurl: 'https://raw.githubusercontent.com/IlyaVoronOFF/pictureStatic/master/Brand/product/',
    init() {
        this.containerBasket = document.querySelector('.basket-items');

        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content;
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
        this.containerBasket.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
    },
    add(item) {
        let find = this.items.find(basketItem => basketItem.productId == item.productId);

        if (!find) {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
    },
    remove(id) {
        let find = this.items.find(basketItem => basketItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            // let imgURL = `${this.imgFTPurl}${index + 1}.jpg`;
            htmlStr += `
                                    <div class="basket-item">
                                        <img src="${item.productImg}" alt="${item.productId}">
                                        <div class="basket-item-details">
                                            <a href="#">${item.productName}</a>
                                            <p>
                                                <form action="#">
                                                    <input type="text" id="basket-quantity" value="${item.amount}"> <span> X $${item.productPrice}.00 - $<output name="result-item">${item.amount * item.productPrice}</output></span>
                                            </p>
                                        </div>
                                        <button 
                                        name="remove"
                                        data-id="${item.productId}"
                                        class="fas fa-times-circle"
                                        ></button>
                                    </div>
           `;
        });
        this.containerBasket.innerHTML = htmlStr;
        //console.log(this.items)
    }
}

basket.init();
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