const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    // if the input value is empty then return from here
	if(!qrValue)return;
	// getting a QR code of user entered value using the 
	// qrserver api and passing the api returned img src to qrImg
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
	wrapper.classList.add("active");
});
// Event listener for button click
generateBtn.addEventListener("click", generateQRCode);

// Event listener for Enter key press
qrInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateQRCode();
    }
});
// // Function to handle input from user and generate QR code
// function handleUserInput(event) {
//   if (event.key === "Enter") {
//       let qrValue = qrInput.value;
//       if (!qrValue) return;
//       qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
//       wrapper.classList.add("active");
//   }
// }

// // Adding event listener for Enter key on the input field
// qrInput.addEventListener("keydown", handleUserInput);


document.addEventListener("DOMContentLoaded", function() {
    const developerCard = document.getElementById("developer-card");
  
    // Developer GitHub usernames
    const developers = [
      { username: "amanxsyed"},
      { username: "umarabdullah-991" }
    ];
  
    // Fetch GitHub data for each developer
    developers.forEach((developer, index) => {
      fetch(`https://api.github.com/users/${developer.username}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById(`developer-${index + 1}-photo`).src = data.avatar_url;
          document.getElementById(`developer-${index + 1}-link`).href = data.html_url;
          document.getElementById(`developer-${index + 1}-link`).textContent = `${data.name || developer.username}`;
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
    });
  
    // Show the card after 1 second
    setTimeout(function() {
      developerCard.classList.add("visible");
      
      // Hide the card after 5 seconds
      setTimeout(function() {
        developerCard.classList.remove("visible");
      }, 5000);
    }, 1000); // 1 second delay before showing the card
  });