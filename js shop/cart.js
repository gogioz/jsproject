window.addEventListener("load", function () {
    var totalPrice = 0;
    var cart = JSON.parse(this.localStorage.getItem("cart"));
    console.log(cart);

    for (var i=0; i<cart.length; i++) {
        var item = document.createElement("div");
        var itemDetails = document.createElement("div");
        var title = document.createElement("h4");
        var price = document.createElement("p");
        var img = document.createElement("img");

        price.innerText = cart[i].price;
        img.src = cart[i].image;
        title.innerText = cart[i].title;


        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(price);
        itemDetails.appendChild(item);
        var cartContainer = document.getElementById("cart-container");
        
        item.setAttribute("class", "cart-item");
        cartContainer.appendChild(item);

        // document.body.appendChild(item);
  

    }
    for (var i = 0; i < cart.length; i++) {
        var totalPrice = cart[i].price ;
        var totalPriceText = document.createElement("h3");
        totalPriceText.innerText = "Total of: " + totalPrice;
        document.body.appendChild(totalPriceText);
    }
   

   
    // totalPriceText.classList.add('total')
    });

function showCart() {}