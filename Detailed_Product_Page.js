async function fetchproductdetails()
{
    try
    {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        let response = await fetch("https://dummyjson.com/products/"+id);
        let data = await response.json();
        console.log(data);

        document.getElementById("title").innerHTML = data.title;
        document.getElementById("des").innerHTML ='<b> Description : </b>'+ data.description;
        document.getElementById("id").innerHTML = '<b> ID : </b>'+data.id;
        document.getElementById("cat").innerHTML = '<b> Category : </b>'+data.category;
        document.getElementById("price").innerHTML = '<b> Price : </b>'+data.price;
        document.getElementById("dis").innerHTML = '<b> Discount : </b>'+data.discountPercentage+'%';
        document.getElementById("rating").innerHTML = '<b> Rating : </b>'+data.rating;
        document.getElementById("stock").innerHTML = '<b> Stock available : </b>'+data.stock;
        document.getElementById("brand").innerHTML = '<b> Brand : </b>'+data.brand;
        document.getElementById("sku").innerHTML = '<b> Sku : </b>'+data.sku;
        document.getElementById("weight").innerHTML = '<b> Weight : </b>'+data.weight;
        document.getElementById("returnPolicy").innerHTML = '<b> Return Policy : </b>'+data.returnPolicy;

        document.getElementById("image").src = data.images[0];
    }
    catch(error){
        console.log(error);
    }
}

fetchproductdetails();