fetch("http://localhost:3000/api/products")
    .then(function(response) {
        return response.json();
      })

      .then(function(tab) {
        console.log(tab)
        const items = document.getElementById("items");
        console.log(items)
        for (let i = 0; i < tab.length; i++){
            const item = tab[i]
            console.log(item)
            items.innerHTML += `<a href="./product.html?id=${item._id}">
            <article>
              <img src="${item.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${item.name}</h3>
              <p class="productDescription">${item.description}</p>
            </article>
          </a>`
        }
      });


      
