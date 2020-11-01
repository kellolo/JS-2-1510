import ProductList from './product-list';

class Catalog extends ProductList {
    constructor(container, url = '') {
        super(container, url);
    }

    _init() {
        super._init();
        this._getProducts();
    }

    async _getProducts() {
        let res = await fetch(this._url);
        let items = await res.json();
        res.ok ? (this._items = items.products) : (this._items = []);
        this._render();
    }
}
export default Catalog;
