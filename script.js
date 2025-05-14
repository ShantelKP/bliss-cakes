document.addEventListener("DOMContentLoaded", function () {
  const moonIcon = document.querySelector(".bi-moon");
  const searchIcon = document.querySelector(".bi-search");
  const orderButtons = document.querySelectorAll("button a[href='Info.html'], #orderNow");

  // Dark Mode Toggle
  moonIcon?.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    moonIcon.classList.toggle("bi-brightness-high");
    moonIcon.classList.toggle("bi-moon");
  });

  // Search Alert
  searchIcon?.addEventListener("click", function () {
    alert("Search functionality coming soon!");
  });

  // 🎉 Confetti on 'Order Now' click
  orderButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      // prevent redirect for 1 second to enjoy the confetti
      e.preventDefault();

      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Then follow the link after a delay
      setTimeout(() => {
        window.location.href = btn.getAttribute("href");
      }, 1200);
    });
  });
});

