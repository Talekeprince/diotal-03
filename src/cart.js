let label = document.getElementById('label');
let shopingCart = document.getElementById('shoping-cart')

let basket = JSON.parse(localStorage.getItem("data")) || [];

let caculation = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0)
 }
   
 caculation ();
 

 let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shopingCart.innerHTML = basket.map((x) =>{
            let {id, item} = x
            let search = itemListData.find((y) => y.id === id) ||  [];
            return `
              <div class="cart-item">
                <img width="100" src=${search.img} alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class='title-price'>
                            <p>${search.name}</p>
                            <p class="cart-item-price"> ${search.price} FCFA</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>
                    <div style=" display: flex; align-items: center; justify-content: flex-start;" class="buttons">
                         <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                         <div id=${id} class="quantity">${item}</div>
                         <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                     </div>
                    <h3>Total: ${item * search.price} FCFA</h3>
                </div>
              </div>
            `
        } ).join(""))
    } else {
        shopingCart.innerHTML = ``
        label.innerHTML = `
        <h2> Cart is empty</h2>
        <a href="product.html">
        <button class="HomeBtn">GO TO SHOP</button>
        </a>
        `
    }
 }

 generateCartItems()

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
      generateCartItems()
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
      generateCartItems()
      localStorage.setItem("data", JSON.stringify(basket));
   }
   
    let update = (id) => {
    let search = basket.find((x) => x.id === id);
       document.getElementById(id).innerHTML = search.item;
 
       caculation();
       totalAmount();
    }

    let removeItem = (id) => {
        let selectedItem = id
        // console.log(selectedItem.id)
        basket = basket.filter((x) => x.id !== selectedItem.id);
        generateCartItems();
        totalAmount();
        caculation();
        localStorage.setItem("data", JSON.stringify(basket));
    }

    let totalAmount = () =>{
        if(basket.length !== 0){
            let amount = basket.map((x) => {
                let {item, id} = x;
                let search = itemListData.find((y) => y.id === id) ||  [];
                return item * search.price
            }).reduce((x,y) => x + y, 0)
            label.innerHTML = `
            <h2>Total Bill: ${amount} FCFA</h2>
            <button onclick="checkOut()" class="checkout">CHECK OUT</button>
            <button onclick="clearCart()" class="clear-cart">CLEAR CART</button>
            `
        }
        else return
    }

    let clearCart = () =>{
        basket = []
        generateCartItems()
        caculation();
        localStorage.setItem("data", JSON.stringify(basket));
    }
    totalAmount();


    // =============================================checkout to proceed payment
    var paymenstEl = document.getElementById('paymenst');

    paymenstEl.innerHTML = ``;
    paymenstEl.style.padding = '0px';

    let checkOut = () => {
        if (paymenstEl.innerHTML ===``) {
            paymenstEl.innerHTML = `
            <div>
                <button id="backtocart" onclick="backToCart()">Back to cart</button>
            </div>
            <br>
            <form action="post">
               <div id="client-id">
                   <input type="text" name="text" id="name-input" placeholder="Enter Fullname">
                   <input type="email" name="email" id="email-input" placeholder="Enter Email Address">
               </div>
               <div id="client-location">
                   <input type="text" name="text" id="region-input" placeholder="Enter Region and City of Residence">
                   <input type="text" name="text" id="description-input" placeholder="Additional Description (Optional)">
               </div>
           </form>
           <div id="pay-methods">
               <div id="mobile-pay">
                   <h2 style="color: rgb(110, 110, 255);">MOBILE TRANFERS</h2>
                   <br>
                   <div id="mobile-method">
                       <div id="MTN">
                           <h4>MTN MOMO</h4>
                           <img width="100" src="logo/momopay.jfif" alt="MTN">
                       </div>
                       <div id="orange">
                           <h4>ORANGE MONEY</h4>
                           <img width="100" src="logo/orange money.jfif" alt="ORANGE">
                       </div>
                       <div id="eu">
                           <h4>EU MOMO</h4>
                           <img width="100" src="logo/eu.jfif" alt="eu">
                       </div>
                   </div>
               </div>
               <br>
               <div id="bank-transfer">
                   <h2 style="color: rgb(110, 110, 255);">BANK TRANFERS</h2>
                   <br>
                   <div id="bank-method">
                       <div id="afriland">
                           <h4>AFRILAND BANK</h4>
                           <img src="logo/firstbank.jfif" alt="firstbank">
                       </div>
                       <div id="ecobank">
                           <h4>ECOBANK</h4>
                           <img src="logo/ecobank.jfif" alt="ecobank">
                       </div>
                       <div id="bank-atlantique">
                           <h4>ALANTIQUE</h4>
                           <img src="logo/alantique.jfif" alt="banque alantique">
                       </div>
                   </div>
               </div>
           </div>
           <br>
           <button onclick='()' class="purchase-btn">Proceed to Payment</button>
           `
            const proceedToPay = document.querySelector('.purchase-btn')
            proceedToPay.addEventListener('click', () =>{
                alert(90)
            })

           paymenstEl.style.padding = '20px';
           let backtocart = document.getElementById("backtocart")
            backtocart.addEventListener('click', () =>{
                paymenstEl.innerHTML = ``;
                paymenstEl.style.padding = '0px';
            })
        } else {
            paymenstEl.innerHTML = ``;
            paymenstEl.style.padding = '0px';
        }
       
    }
