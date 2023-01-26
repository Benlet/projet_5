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
            const favicon = document.querySelector("head")
            favicon.innerHTML += `
            <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
            <link rel="manifest" href="images/favicon/site.webmanifest">
            <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="theme-color" content="#ffffff">`
      });


      
