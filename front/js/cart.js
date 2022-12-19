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
    }  











   // function makeImage(item){
     //   const image = document.createElement("img")
       // image.src = 
    