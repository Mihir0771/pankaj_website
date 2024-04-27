// Sample data for products
const products = [
    { name: "Product 1", image: "res/pro/1.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Product 2", image: "res/pro/2.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Product 3", image: "res/pro/3.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Product 4", image: "res/pro/4.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Product 5", image: "res/pro/5.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];
  
  // Function to display products on the page
  function displayProducts() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      
      const image = document.createElement('img');
      image.src = product.image;
      productCard.appendChild(image);
      
      const name = document.createElement('h2');
      name.textContent = product.name;
      productCard.appendChild(name);
      
      const description = document.createElement('p');
      description.textContent = product.description;
      productCard.appendChild(description);
      
      container.appendChild(productCard);
    });
  }
  
  // Display products when the page loads
  document.addEventListener('DOMContentLoaded', displayProducts);
  