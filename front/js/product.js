const init = async () => {

    //récupérer l'id dans l'url
    const queryString = window.location.search;
    console.log(queryString);

    //Trouver l'id via URLsearchParams() et .get
    const searchParam = new URLSearchParams(queryString);
    const id = searchParam.get("id");

    const response = await fetch("http://localhost:3000/api/products/" + id)
    const canape = await response.json();

    document.querySelector(".item__img").innerHTML = `<img src="${canape.imageUrl}" alt="Photographie d'un canapé">`;

    document.getElementById("title").innerHTML = canape.name;

    document.getElementById("price").innerHTML = canape.price;

    document.getElementById("description").innerHTML = canape.description;

    let couchColor = '';
    canape.colors.forEach(color => {
        couchColor += `<option value="${color}">${color}</option>`
    });

    document.getElementById("colors").insertAdjacentHTML('beforeend', couchColor);

    const bouton = document.getElementById("addToCart");
    bouton.addEventListener("click", function () {
        const color = document.getElementById("colors");
        const quantity = document.getElementById("quantity");
        const quantityValue = parseInt(quantity.value);
        console.log(colors.value);
        if (!color.value || !quantityValue) {
            alert("Veuillez sélectionné une couleur et une quantité valide")
            return
        }
        if (quantityValue < 1 || quantityValue > 100) {
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

}

init();






