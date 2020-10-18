import basket from "./basket.js";
import catalogIndex from "./catalog-index.js";
import catalogProduct from "./catalog-product.js";
import catalogSingle from "./catalog-singlePage.js";

export default () => {
    basket.init();
    catalogIndex.init();
    catalogProduct.init();
    catalogSingle.init();
}