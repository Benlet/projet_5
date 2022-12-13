
//récupérer l'id dans l'url
const queryString = window.location.search;
console.log(queryString);

//Retirer le "?" avec .slice afin de garder que l'id
//const finalId = queryString.slice(4);
//console.log(finalId);

//Trouver l'id via URLsearchParams() et .get
const searchParam = new URLSearchParams(queryString);
console.log(searchParam);

const leId = searchParam.get("id");
console.log(leId);

//L'image du canapé
fetch("http://localhost:3000/api/products/"+leId)
    .then(function(response){
        return response.json();
    })

    .then(function(item){
        const image = document.getElementsByClassName("item__img"); 
        image[0].innerHTML += `<img src="${item.imageUrl}" alt="Photographie d'un canapé">`

        const title = document.getElementById("title");
        title.innerHTML += item.name

        const price = document.getElementById("price");
        price.innerHTML += item.price

        const description = document.getElementById("description");
        description.innerHTML += item.description

        for (let i = 0; i < item.colors.length; i++){
        const color = item.colors[i];
        const colors = document.getElementById("colors");
        colors.innerHTML += `<option value="${color}">${color}</option>`
        }

        const bouton = document.getElementById("addToCart");
        bouton.addEventListener("click", function(){
            console.log("click");
            addToBasket(leId);

            function saveBasket(basket){
                localStorage.setItem("basket",JSON.stringify(basket));
            }

            function getBasket(){
                let basket = localStorage.getItem("basket");
                if(basket == null){
                    return []
                }
                else{
                    return JSON.parse(basket);
                }
            }
            
            function addToBasket(product){
                let basket = getBasket();
                let foundProduct = basket.find(p => p.id = product.id);
                if(product != undefined){
                    product.quantity++;
                }
                else{
                    product.quantity = 1;
                    basket.push(product);
                }
                saveBasket(basket);
            }
        })
    });









