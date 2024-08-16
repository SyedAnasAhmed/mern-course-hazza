var products;
var url = 'https://dummyjson.com/products';

GetProductsFromURL(url).then(data => {
    products = data.products;
    appendCards();
}).catch(error => {
    console.error('Fetch error:', error);
});

function appendCards() {
    
  var container = document.getElementById('productsContainer');
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const cardHTML = `
      <div class="col-md-3">
        <div class="card" style="width: 18rem; ">
          <img src="${product.thumbnail}" class="card-img-top product_img"  width="100px" height="200px" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Discount: ${product.discountPercentage}%</p>
            <p class="card-text">Rating: ${product.rating}</p>
            <p class="card-text">Stock: ${product.stock}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <p class="card-text">Category: ${product.category}</p>
            <a href="details.html" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  }
}

function GetProductsFromURL(url) {
    
    return fetch(url).then(response => {
        
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return response.json();
    });
}
