// Sample data for products
const products = [
    { name: "DP-TAB - Diclofenac Sodium & Paracetamol Tablets", image: "res/pro/p1.png", description: "DP-TAB combines the potent anti-inflammatory and analgesic properties of Diclofenac Sodium with the fever-reducing and pain-relieving benefits of Paracetamol. This powerful formulation is designed to offer fast-acting and effective relief for a variety of conditions, making it an essential addition to your medicine cabinet." },
    { name: "DPC-Syrup", image: "res/pro/p2.png", description: "DPC-Syrup is a professional-grade pharmaceutical syrup formulated with Dextromethorphan HBr, Phenylephrine HCl, and Chlorpheniramine Maleate. Each 5mL of the syrup contains 10 mg Dextromethorphan HBr, 5 mg Phenylephrine HCl, and 2 mg Chlorpheniramine Maleate, combined to provide effective relief from cough and cold symptoms." }
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
  
  
