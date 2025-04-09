
/* NavBar Section */
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    navbar.addEventListener("mouseenter", function () {
        navbar.classList.add("expanded");
    });

    navbar.addEventListener("mouseleave", function () {
        navbar.classList.remove("expanded");
    });
});

menuToggle.addEventListener ('click', () =>{
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    


    if (mobileMenu.classList.contains('active')) {
        menuIcon.src = "../images/close_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
    }
    else {
        menuIcon.src = "../images/menu_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
    }
});

overlay.addEventListener ('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');

    menuIcon.src = "../images/menu_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
});


/* Hero Section */
  const thumbnails = document.querySelectorAll('.thumb');
  const heroImage = document.getElementById('hero-image');
  const heroTitle = document.getElementById('hero-title');
  const heroRating = document.querySelector('#hero-info p'); // First <p> in info
  const heroLang = document.querySelectorAll('#hero-info p')[1]; // Second <p>
  const movies = [
    {
      title: "Captain America <br><span class='font-bold'>Brave New World</span>",
      rating: "7.8",
      language: "English",
      img: "../images/captain-america-brave-new-world.jpg"
    },
    {
      title: "Sonic the Hedgehog 3",
      rating: "8.5",
      language: "English",
      img: "../images/sonic-3-movie.jpg"
    },
    {
      title: "Red One",
      rating: "7.0",
      language: "English",
      img: "../images/red-one-movie-.jpg"
    }
  ];
  
  let currentIndex = 0;
  
  thumbnails.forEach(button => {
    button.addEventListener('click', () => {
      const newImg = button.getAttribute('data-img');
      const newTitle = button.getAttribute('data-title');
      const newRating = button.getAttribute('data-rating');
      const newLang = button.getAttribute('data-language');


      heroImage.classList.add('fade-out');

      setTimeout(() => {
        heroImage.src = newImg;
        heroImage.classList.remove('fade-out');
      }, 300);

      heroTitle.innerHTML = newTitle;
      heroRating.innerText = newRating;
      heroLang.innerText = newLang;
    });
  });

  function updateHero(index) {
    heroImage.classList.add('fade-out');
    setTimeout(() => {
      heroImage.src = movies[index].img;
      heroTitle.innerHTML = movies[index].title;
      heroRating.innerText = movies[index].rating;
      heroLang.innerText = movies[index].language;
      heroImage.classList.remove('fade-out');
    }, 300);
  }

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  updateHero(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % movies.length;
  updateHero(currentIndex);
});

// Auto-slide every 15 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % movies.length;
    updateHero(currentIndex);
  }, 150000);
  



/*document.addEventListener("DOMContentLoaded", function () {
    const fullLogo = document.getElementById("full-logo");
    const shortLogo = document.getElementById("short-logo");

    navbar.addEventListener("mouseenter", function () {
        fullLogo.style.display = "block";
        shortLogo.style.display = "none";
    });

    navbar.addEventListener("mouseleave", function () {
        fullLogo.style.display = "none";
        shortLogo.style.display = "block";
    });
});*/





/*document.addEventListener("DOMContentLoaded", function () {
    
    const fullLogo = document.getElementById("full-logo");
    const shortLogo = document.getElementById("short-logo");

    // Function to toggle navbar logo when screen size is small
    function checkScreenSize() {
        if (window.innerWidth < 800) {
            navbar.classList.add("minimized");
        } else {
            navbar.classList.remove("minimized");
        }
    }

    // Track scrolling behavior
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // User scrolling down, minimize navbar
            navbar.classList.add("minimized");
        } else if (currentScroll < lastScrollTop) {
            // User scrolling up, expand navbar
            navbar.classList.remove("minimized");
        }

        lastScrollTop = currentScroll;
    });

    // Check initially for screen size
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
*/
