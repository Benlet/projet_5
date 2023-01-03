const basket = getBasket();

    for (let i = 0; i < basket.length; i++){
        const item = basket[i];
        fetch("http://localhost:3000/api/products/" + item.id)
    .then(function(response) {
        return response.json();
      })
      .then(function(product){
        console.log(product);

        const cartItem = document.getElementById("cart__items");
        cartItem.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
          <img src="${product.imageUrl}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${product.name}</h2>
            <p>${item.color}</p>
            <p>${product.price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`
      })

        const totalQuantity = document.getElementById("totalQuantity");
        totalQuantity.innerHTML = getNumberProduct();


        const totalPrice = document.getElementById("totalPrice")
        totalPrice.innerHTML = getTotalPrice(product.price)


        const changeQuantityButton = document.getElementsByClassName("cart__item__content__settings__quantity");
        changeQuantityButton.addEventListener("change", function(){
          changeQuantity(quantity);
        })

        const deleteButton = document.getElementsByClassName("deleteItem")
        deleteButton.addEventListener("click", function(){
          removeFromBasket(product);
        })
    }

    const orderButton = document.getElementById("order");
    orderButton.addEventListener("click", function(event){
        submitForm(event)
    })

    function submitForm(event){
      event.preventDefault()
      if (basket.length === 0){
        alert("Votre panier est vide")
      }else {
        alert("Commande validée")
      }

      const body = makeRequestBody();
      fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application.json"
        }
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      console/log(form.elements);
    }

    function makeRequestBody(){
      const form = document.querySelector(".cart__order__form")
      const firstName = form.elements.firstName.value
      const lastName = form.elements.lastName.value
      const adress = form.elements.adress.value
      const city = form.elements.city.value
      const email = form.elements.email.value

      const body = { contact: {
        firstName: firstName,
        lastName: lastName,
        adress: adress,
        city: city,
        email: email,
      },
        products: [""]
      }
      return body
    }

   