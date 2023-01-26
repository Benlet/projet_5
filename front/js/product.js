
//récupérer l'id dans l'url
const queryString = window.location.search;
console.log(queryString);

//Retirer le "?" avec .slice afin de garder que l'id
//const finalId = queryString.slice(4);
//console.log(finalId);

//Trouver l'id via URLsearchParams() et .get
const searchParam = new URLSearchParams(queryString);

const leId = searchParam.get("id");

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

        if (item.id != leId){
            console.log(item.id)
            console.log(leId)
            return alert("Error 404")
        }
        }


        const bouton = document.getElementById("addToCart");
        bouton.addEventListener("click", function(){
            const color = document.getElementById("colors");
            const quantity = document.getElementById("quantity");
            const quantityValue = parseInt(quantity.value);
            console.log(colors.value);
            if (!color.value || !quantityValue){
                alert("Veuillez sélectionné une couleur et une quantité valide")
                return
            }
            if(quantityValue < 1 || quantityValue > 100){
                alert("Selectionnez une quantité entre 1 et 100")
                return
            }
            const product = {
                id: item._id,
                color: color.value,
                quantity: quantityValue
            }
            addToBasket(product);
            alert("Le produit a bien été ajouté au panier")
        })
    });






