<template>
  <div>
    <header class="header container">
        <div class="header__left">
            <a href="index.html" class="header__logo"><img src="../src/assets/img/logo.jpg" alt="logo"> Bran<span>d</span></a>
            <form class="header__search">
                <div class="header__browse">Browse <i class="fas fa-caret-down"></i></div>
                <input name="search" type="text" placeholder="Search for Item...">
                <button><i class="fas fa-search"></i></button>
            </form>
        </div>
        <div class="header__right">
            <a href="#" class="header__cart"><img src="../src/assets/img/cart.jpg" alt="cart"></a>
            <a href="Checkout.html" class="header__account-bar">My account <i class="fas fa-caret-down"></i></a>
        </div>
    </header>
    <div class="header__line"></div>
    <div class="main__menu">
        <a href="index.html">Home</a>
        <a href="#">Man</a>
        <a href="Single-page.html">Women</a>
        <a href="#">Kids</a>
        <a href="#">Accoseriese</a>
        <a href="#">Featured</a>
        <a href="#">Hot Deals</a>
    </div>
    <div class="shoppingCart__topMenu">
        <div class="shoppingCart__topMenu-contente container">
            <div class="shoppingCart__topMenu-contente-left">New Arrivals</div>
            <div class="shoppingCart__topMenu-contente-right">
                <a href="#" class="">Home </a> /
                <a href="#">Men </a> /
                <div class="shoppingCart__topMenu-active"><a href="#">New Arrivals</a></div>
            </div>
        </div>
    </div>
    <div class="shoppingCart__cart">
        <div class="shoppingCart__cart-contente container">
            <div class="shoppingCart__cart-caption">
                <div class="shoppingCart__cart-left">Product Details</div>
                <div class="shoppingCart__cart-right">
                    <div class="shoppingCart__cart-right-column">unite Price</div>
                    <div class="shoppingCart__cart-right-column">Quantity</div>
                    <div class="shoppingCart__cart-right-column">shipping</div>
                    <div class="shoppingCart__cart-right-column">Subtotal</div>
                    <div class="shoppingCart__cart-right-column">ACTION</div>
                </div>
            </div>
            <div class="shoppingCart__cart-item">
                <div class="shoppingCart__cart-left">
                    <div class="shoppingCart__cart-item-img"><img src="../src/assets/img/shopping-cart/item1.jpg" alt="item"></div>
                    <div class="shoppingCart__cart-item-description">
                        <h3>Mango  People  T-shirt</h3>
                        <div>Color: <span>Red</span></div>
                        <div>Size: <span>Xll</span></div>
                    </div>
                </div>
                <div class="shoppingCart__cart-right">
                    <div class="shoppingCart__cart-right-column">150$</div>
                    <div class="shoppingCart__cart-right-column">
                        <input type="text" id="itemsQuantity" placeholder="2">
                    </div>
                    <div class="shoppingCart__cart-right-column">FREE</div>
                    <div class="shoppingCart__cart-right-column">$300</div>
                    <div class="shoppingCart__cart-right-column"><i class="fas fa-times-circle"></i></div>
                </div>
            </div>
            <div class="shoppingCart__cart-item">
                <div class="shoppingCart__cart-left">
                    <div class="shoppingCart__cart-item-img"><img src="../src/assets/img/shopping-cart/item2.jpg" alt="item"></div>
                    <div class="shoppingCart__cart-item-description">
                        <h3>Mango  People  T-shirt</h3>
                        <div>Color: <span>Red</span></div>
                        <div>Size: <span>Xll</span></div>
                    </div>
                </div>
                <div class="shoppingCart__cart-right">
                    <div class="shoppingCart__cart-right-column">150$</div>
                    <div class="shoppingCart__cart-right-column">
                        <input type="text" id="itemsQuantity" placeholder="2">
                    </div>
                    <div class="shoppingCart__cart-right-column">FREE</div>
                    <div class="shoppingCart__cart-right-column">$300</div>
                    <div class="shoppingCart__cart-right-column"><i class="fas fa-times-circle"></i></div>
                </div>
            </div>
            <div class="shoppingCart__cart-item">
                <div class="shoppingCart__cart-left">
                    <div class="shoppingCart__cart-item-img"><img src="../src/assets/img/shopping-cart/item3.jpg" alt="item"></div>
                    <div class="shoppingCart__cart-item-description">
                        <h3>Mango  People  T-shirt</h3>
                        <div>Color: <span>Red</span></div>
                        <div>Size: <span>Xll</span></div>
                    </div>
                </div>
                <div class="shoppingCart__cart-right">
                    <div class="shoppingCart__cart-right-column">150$</div>
                    <div class="shoppingCart__cart-right-column">
                        <input type="text" id="itemsQuantity" placeholder="2">
                    </div>
                    <div class="shoppingCart__cart-right-column">FREE</div>
                    <div class="shoppingCart__cart-right-column">$300</div>
                    <div class="shoppingCart__cart-right-column"><i class="fas fa-times-circle"></i></div>
                </div>
            </div>
        </div>
    </div>
    <div class="shoppingCart__cart-buttons container">
        <div class="shoppingCart__cart-buttons-button"><button>Clear shopping cart</button></div>
        <div class="shoppingCart__cart-buttons-button"><button>Continue shopping</button></div>
    </div>
    <div class="shoppingCart__buyBlock container">
        <div class="shoppingCart__buyBlock-delivery">
            <div class="shoppingCart__buyBlock-delivery-caption">Shipping Adress</div>
              <select id="country" placeholder="Bangladesh">
                    <option label="Bangladesh" value="Bangladesh"></option>
                    <option label="Russia" value="Russia"></option>
                    <option label="Italy" value="Italy"></option>
                    <option label="France" value="France"></option>
                    <option label="Turkey" value="Turkey"></option>
                    <option label="Ukraine" value="Ukraine"></option>
                    <option label="Spain" value="Spain"></option>
                    <option label="Togo" value="Togo"></option>
                    <option label="USA" value="USA"></option>
                    <option label="Canada" value="Canada"></option>
              </select>
            <input type="text" placeholder="State">
            <input type="text" placeholder="Postcode / Zip">
            <button>get a quote</button>
        </div>
        <div class="shoppingCart__buyBlock-coupon">
            <div class="shoppingCart__buyBlock-coupon-caption">coupon  discount</div>
            <div>Enter your coupon code if you have one</div>
            <input type="text" placeholder="State">
            <button>Apply coupon</button>
        </div>
        <div class="shoppingCart__buyBlock-buy">
            <div class="shoppingCart__buyBlock-buy-row1">Sub total <span>$900</span></div>
            <div class="shoppingCart__buyBlock-buy-row2">GRAND TOTAL<span>$900</span></div>
            <div class="shoppingCart__buyBlock-buy-line"></div>
            <button>proceed to checkout</button>
        </div>
    </div>


    <footer>
        <div class="subscribe">
            <div class="subscribe__contente container">
                <div class="subscribe__contente-left">
                    <div class="subscribe__icon"><img src="../src/assets/img/subscribe_icon.jpg" alt="author"></div>
                    <div class="subscribe__contente-left-text">
                        <div class="subscribe__contente-left-message">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </div>
                        <div class="subscribe__contente-left-author">
                            Bin Burhan <span>Dhaka, Bd</span>
                        </div>
                        <div class="subscribe__contente-left-lines">
                            <div class="subscribe__contente-left-line1"></div>
                            <div class="subscribe__contente-left-line2"></div>
                            <div class="subscribe__contente-left-line3"></div>
                        </div>
                    </div>
                </div>
                <div class="subscribe__contente-right">
                    <div class="subscribe__contente-right-formCapture">
                        <div class="subscribe__contente-right-formCaptureHeader">Subscribe</div>
                        <span>FOR OUR NEWLETTER AND PROMOTION</span>
                    </div>
                    <form class="subscribe__contente-right-form">
                        <input name="email" type="text" placeholder="Enter Your Email">
                        <button>Subscribe</button>
                    </form>
                </div>

            </div>

        </div>
        <div class="contacts">
            <div class="contacts__contente container">
                <div class="contacts__contente-left">
                    <a href="index.html" class="header__logo"><img src="../src/assets/img/logo.jpg" alt="logo"> Bran<span>d</span></a>
                    <div class="contacts__contente-left-text">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. <br><br>
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.<br>

                        Objectively strategize seamless relationships via resource sucking testing procedures. Proactively cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after alternative synergy.

                        Compellingly envisioneer corporate methods of empowerment before standards compliant technologies. Objectively facilitate progressive.
                    </div>
                </div>
                <div class="contacts__contente-right">
                    <div class="contacts__contente-right-column">
                        <span>COMPANY</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Home</a>
                            <a href="#">Shop</a>
                            <a href="#">About</a>
                            <a href="#">How It Works</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div class="contacts__contente-right-column">
                        <span>INFORMATION</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Tearms &amp; Condition</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">How to Buy</a>
                            <a href="#">How to Sell</a>
                            <a href="#">Promotion</a>
                        </div>
                    </div>
                    <div class="contacts__contente-right-column">
                        <span>SHOP CATEGORY</span>
                        <div class="contacts__contente-right-column-menu">
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">Child</a>
                            <a href="#">Apparel</a>
                            <a href="#">Brows All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer__contente container">
                <div class="footer__contente-left">
                    &copy; 2017  Brand  All Rights Reserved.
                </div>
                <div class="footer__contente-right">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
// @ is an alias to /src
import Catalog from '@/components/Catalog.vue';
import Basket from '@/components/Basket.vue';

export default {
    name: 'Home',
    components: { Catalog, Basket },
    data() {
        return {
            showBasket: false
        }
    },
    methods: {
        get(url) {
            return fetch(url)
                .then(data => data.json())
        },
    },
    mounted() {
        console.log(this);
    }
}
</script>