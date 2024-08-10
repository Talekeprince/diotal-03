//=============================================================== CART PRODUCT 
var cartAmount = document.getElementById('cart-amount');
var categories  = document.getElementById('categories');
let cart_items = document.getElementById('item');
let cart_itemsBox = document.getElementById('cart-items');


// ========================================================shopping cart
let shop = document.getElementById('shop')

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
   return (shop.innerHTML = itemListData.map((x) => {
      let {id, name, price, img, initPrice} = x
      let search = basket.find((x) =>x.id === id) || []
      return  `
      <div id=product-id-${id} class="item">
             <img width="224" height="220" src=${img} alt="school bag">
             <div class="details">
                 <h3>${name}</h3>
                 <p>${initPrice}</p>
                 <div class="price-quantity">
                     <h2>CFA ${price}</h2>
                     <div class="buttons">
                         <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                         <div id=${id} class="quantity">
                         ${search.item === undefined? 0: search.item}
                         </div>
                         <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                     </div>
                 </div>
             </div>
         </div>`
   }).join(""))
}
generateShop()

let increment = (id) => {
 let selectedItem = id
   let search = basket.find((x) => x.id === selectedItem.id)
   if(search === undefined){
      basket.push({
         id:selectedItem.id,
         item: 1
      });
   }
   else{
      search.item += 1
   }
  
   update(selectedItem.id)
   localStorage.setItem("data", JSON.stringify(basket))
}

let decrement = (id) => {
   let selectedItem = id
   let search = basket.find((x) => x.id === selectedItem.id);

   if(search === undefined) return;
   else if(search.item === 0) return;
   else{
      search.item -= 1
   }

   update(selectedItem.id)
   basket = basket.filter((x) => x.item !== 0)
   localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
   let search = basket.find((x) => x.id === id)
      document.getElementById(id).innerHTML = search.item;

      caculation()
}


let caculation = () => {
   let cartIcon = document.getElementById('cartAmount');
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0)
}
  
caculation ();



// ==================================================================slide button
// var slide_img = document.querySelector('.slide-image');
var textSlider = document.querySelector('.quick-search-button')
var naviButton = document.querySelectorAll('#navigation-buttons span');

naviButton.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault()
      textSlider.scrollLeft += icon.id === 'left' ? -400 : 400;
    })
})

// ========================================================================SORT BY CATEGORY

// --------------------------------------------Aparell Display
let apparelBtn = document.getElementById('apparel-button');

apparelBtn.addEventListener('click', () => {
   apparelBtn.style = 
   `background: hsla(200, 100%, 20%);
   color:white;
   `
   shop.innerHTML = `
      <div class="our-suplliers">
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">Kelly's&nbsp;RK&nbsp;fashion</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;BUEA,&nbsp;MOLYKO</span>
                  <span>Contact:&nbsp;+237&nbsp;6*********9</span>
                  <span>Email:&nbsp;kellyfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0032.jpg" alt="">
                <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0021.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0019.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
               </div>
               
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">FILCO'S&nbsp;PARK&nbsp;ICON</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;LR&nbsp;DOUALA,&nbsp;GA DE ROI</span>
                  <span>Contact:&nbsp;+237&nbsp;6********77</span>
                  <span>Email:&nbsp;filcopark@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
               <div id="grided-image">
                   <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/short.jpg" alt="">
                  <img src="apparel&accessories/whitetshirt.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0072.jpg" alt="">
               </div>
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">PEARL'S&nbsp;FASHION</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;KUMBA,&nbsp;FIANGO</span>
                  <span>Contact:&nbsp;+237&nbsp;6********26</span>
                  <span>Email:&nbsp;pearlfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0033.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240804-WA0043.jpg" alt="">
                  <img src="apparel&accessories/caps.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0041.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0039.jpg" alt="">
               </div>
            </div>
         </div>
      </div>
   `
})

// -------------------------------------------- COSMETIC DISPLAY
let cosmeticBtn = document.getElementById('cosmetics-button');
cosmeticBtn.addEventListener('click', () => {
   cosmeticBtn.style = 
   `background: hsla(200, 100%, 20%);
   color:white;
   `
   shop.innerHTML = `
      <div class="our-suplliers">
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">BV&nbsp;PERFUMES & COSMETICS</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;BUEA,&nbsp;MOLYKO</span>
                  <span>Contact:&nbsp;+237&nbsp;6*********9</span>
                  <span>Email:&nbsp;bvperfume@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0032.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
               </div>
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">FILCO'S&nbsp;PARK&nbsp;ICON</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;LR&nbsp;DOUALA,&nbsp;GA DE ROI</span>
                  <span>Contact:&nbsp;+237&nbsp;6********77</span>
                  <span>Email:&nbsp;filcopark@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0072.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
                  <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
               </div>
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">PEARL'S&nbsp;FASHION</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;KUMBA,&nbsp;FIANGO</span>
                  <span>Contact:&nbsp;+237&nbsp;6********26</span>
                  <span>Email:&nbsp;pearlfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0033.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240804-WA0043.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0039.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240804-WA0043.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0039.jpg" alt="">
               </div>
            </div>
         </div>
      </div>
      

   `
})

// ========================================================== SEARCH INPUT COSTUSMATION
let searchInput = document.getElementById('search-input')
var searchBtn = document.getElementById('search-btn');

let search_input = () => {
   searchInput.style.boxShadow = '0 0 5px #1f242d'
}


searchBtn.addEventListener('click', (e) => {
   e.preventDefault()
   if (searchInput.value == 'filco') {
      shop.innerHTML = `
      <div class="our-suplliers">
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">FILCO'S&nbsp;PARK&nbsp;ICON</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;LR&nbsp;DOUALA,&nbsp;GA DE ROI</span>
                  <span>Contact:&nbsp;+237&nbsp;6********77</span>
                  <span>Email:&nbsp;filcopark@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
               <div id="grided-image">
                   <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/short.jpg" alt="">
                  <img src="apparel&accessories/whitetshirt.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0072.jpg" alt="">
               </div>
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">PEARL'S&nbsp;FASHION</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;KUMBA,&nbsp;FIANGO</span>
                  <span>Contact:&nbsp;+237&nbsp;6********26</span>
                  <span>Email:&nbsp;pearlfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0033.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240804-WA0043.jpg" alt="">
                  <img src="apparel&accessories/caps.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0041.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0039.jpg" alt="">
               </div>
            </div>
         </div>
          <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">Kelly's&nbsp;RK&nbsp;fashion</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;BUEA,&nbsp;MOLYKO</span>
                  <span>Contact:&nbsp;+237&nbsp;6*********9</span>
                  <span>Email:&nbsp;kellyfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0032.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0021.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0019.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
               </div>
            </div>
         </div>
      </div>
      

   `
   } else if (searchInput.value == 'pearl') {
      shop.innerHTML = `
      <div class="our-suplliers">
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">PEARL'S&nbsp;FASHION</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;KUMBA,&nbsp;FIANGO</span>
                  <span>Contact:&nbsp;+237&nbsp;6********26</span>
                  <span>Email:&nbsp;pearlfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0033.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240804-WA0043.jpg" alt="">
                  <img src="apparel&accessories/caps.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240808-WA0041.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0039.jpg" alt="">
               </div>
            </div>
         </div>
          <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">Kelly's&nbsp;RK&nbsp;fashion</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;SW&nbsp;BUEA,&nbsp;MOLYKO</span>
                  <span>Contact:&nbsp;+237&nbsp;6*********9</span>
                  <span>Email:&nbsp;kellyfashion@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0032.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0038.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240725-WA0080.jpg" alt="">
               </div>
               
            </div>
         </div>
         <br>
         <br>
         <br>
         <br>
         <hr>
         <br>
         <br>
         <br>
         <br>
         <div class='supllier-shop'>
            <div class='about-supplier'>
               <h1 class="supllier-brand">FILCO'S&nbsp;PARK&nbsp;ICON</h1>
               <div class="brand-details">
                  <span>Located:&nbsp;LR&nbsp;DOUALA,&nbsp;GA DE ROI</span>
                  <span>Contact:&nbsp;+237&nbsp;6********77</span>
                  <span>Email:&nbsp;filcopark@diotal.com</span>
                  <br>
                  <a class='enter-shop-btn' href=''>Enter shop</a>
               </div>
            </div>
            <div class="supplier-product">
               <img src="apparel&accessories/IMG-20240725-WA0072.jpg" alt="">
               <div id="grided-image">
                  <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
                  <img src="apparel&accessories/29 fill.jpg" alt="">
                  <img src="apparel&accessories/IMG-20240803-WA0030.jpg" alt="">
               </div>
               
            </div>
         </div>
         
      </div>
      

   `
   }else{
      alert('Could not find Supplier '+ ''  +searchInput.value);
   }
})