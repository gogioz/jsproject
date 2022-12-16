let api = new XMLHttpRequest();
api.open("GET", "https://api.itbook.store/1.0/search/java");
api.send();
api.onreadystatechange = function () {
    if (api.readyState == 4 && api.status == 200) {
        let books = JSON.parse(api.responseText).books;
        console.log(books);
        let booksContainer = document.getElementById("products-container");

        books.forEach((book) => {
            let bookDiv = document.createElement("div");
            var bookImg = document.createElement("img");
            var bookTitle = document.createElement("h3");
            var bookPrice = document.createElement("p");
            var cartBtn = document.createElement("button");

            bookDiv.classList.add("book");
            bookImg.classList.add("bookImg");
            bookTitle.classList.add("title");
            bookPrice.classList.add("price");
            cartBtn.innerText = "Add to cart";

            bookImg.src = book.image;
            bookTitle.innerText = book.title;
            bookPrice.innerText = book.price;

            bookDiv.appendChild(bookImg);
            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookPrice);
            bookDiv.setAttribute("class", "card");

            bookDiv.appendChild(cartBtn);

            cartBtn.addEventListener("click", function () {
                var cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(book);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("We added the book to your cart. Great Choice!");
                // console.log(book.title);
            });
            booksContainer.appendChild(bookDiv);
        });
    }
};
