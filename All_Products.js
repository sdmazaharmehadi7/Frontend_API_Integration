async function fetchproducts(url = "https://dummyjson.com/products")
{
    try
    {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        document.getElementById("product-container").innerHTML="";

        let template = document.getElementById("template");
        let clone;
        data.products.forEach(x=> {
        clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = x.title;
        
        clone.querySelector(".details").innerHTML = 
        `   <ul>
                <li><b>ID:</b> ${x.id}</li>
                <li><b>Description:</b> ${x.description}</li>
            </ul> 
            <div class="product-img-wrapper">
                <img src="${x.images[0]}" alt="${x.title}">
            </div> `;
        clone.querySelector(".price").innerHTML = '<b>'+'Price: '+'</b>'+'$'+x.price;
        clone.querySelector(".view-details-btn").href = `Detailed_Product_Page.html?id=${x.id}`;

        document.getElementById("product-container").appendChild(clone);
        });
    }
    catch(error)
    {
        console.log(error);
    }
}

const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
searchInput.addEventListener("input", e => {
    categorySelect.value = ""; 
    const query = e.target.value.trim();
    if (query) {
        fetchproducts("https://dummyjson.com/products/search?q="+query);
    } else {
        fetchproducts();
    }
});

categorySelect.addEventListener("change", (e) => {
    searchInput.value = ""; 
    const category = e.target.value;
    if (category) {
        fetchproducts("https://dummyjson.com/products/category/"+category);
    } else {
        fetchproducts();
    }
});


fetchproducts();