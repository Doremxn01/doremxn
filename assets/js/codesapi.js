// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
  
    // Fetch the card data from the JSON file
    fetch("assets/database/codes.json")
  .then((response) => response.json())
  .then((cardData) => {
    // ...
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
        // Loop through the card data and create card elements.
        cardData.forEach((data) => {
          const card = document.createElement("div");
          card.classList.add("card-container");
  
          // Construct the card HTML content.
          card.innerHTML = `
            <div class="banner-img" style="background-image: url(${data.bannerImageUrl});"></div>
            <img src="${data.profileImageUrl}" alt="profile image" class="profile-img">
            <h1 class="name">${data.name}</h1>
            <p class="description">${data.description}</p>
            <a href="${data.videoUrl}" target="_blank">
            <button class="btn">
              <i class="fab fa-youtube"></i> Watch Video
            </button>
            </a>
            <a href="${data.codeUrl}" target="_blank">
              <button class="s-btn">
                <i class="fas fa-duotone fa-code"></i> Source Code
              </button>
            </a>
          `;
  
          // Append the card to the card container.
          cardContainer.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  
