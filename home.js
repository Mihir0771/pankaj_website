//script for smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

function toggleMenu() {
	var navbar = document.getElementById("menuItems");
	navbar.classList.toggle("active");
}

function poppop(){
	alert("We Are Working On It!!  This feature will be soon available!!");
}

// Create a new Date object which represents the current date and time
const currentDate = new Date();

// Get the current date in YYYY-MM-DD format
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// Get the current time in HH:MM:SS format
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Combine date and time
const formattedDateTime = `${formattedDate} ${formattedTime}`;

console.log("Current Date:", formattedDate);
console.log("Current Time:", formattedTime);
console.log("Current Date and Time:", formattedDateTime);


//For contact section
document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.getElementById('contact-form');
	const messageStatus = document.getElementById('message-status');
	
	contactForm.addEventListener('submit', function(event) {
	  event.preventDefault();
	  
	  const formData = new FormData(contactForm);
	  const name1 = formData.get('name');
	  const email1 = formData.get('email');
	  const message1 = formData.get('message');
	  const datetime1 = formattedDateTime;
	  
	  // Here you can perform further actions like sending the form data to a server using AJAX
	  //data

		  // For now, let's just display a message to the user
	  messageStatus.textContent = `Thank you, ${name1}! Your message has been sent.`;
	  
	  // Clear the form fields after submission
	  contactForm.reset();
	});
  });
  

