// Function to create a random star element
function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 4;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    document.getElementById("stars-container").appendChild(star);
  
    // Add the glow class to the star
    star.classList.add("star-glow");
  }
  
  // Function to create multiple stars
  function createStars() {
    for (let i = 0; i < 100; i++) {
      createStar();
    }
  }
  
  createStars(); // Create stars when the page loads
  
  // Animate the stars
  function animateStars() {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      const speed = star.style.width.replace("px", "") / 10;
      star.style.transform = `translate(-${speed}px, 0)`;
      if (parseFloat(star.style.left) < -10) {
        // Reset the star's position when it goes off the screen
        star.style.left = "110vw";
      }
    });
  
    requestAnimationFrame(animateStars);
  }
  
  animateStars(); // Start the animation loop
  