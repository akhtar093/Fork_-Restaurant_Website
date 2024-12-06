const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");



// called an api to dynamiclly place menu in the site 

document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'; // Example API endpoint
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear existing static content (optional)
      swiperWrapper.innerHTML = '';
      console.log(data)

      data.meals.forEach(meal => {
        // Create a swiper slide dynamically
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';

        swiperSlide.innerHTML = `
          <div class="menu__card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="menu__card__details">
              <h4>${meal.strMeal}</h4>
              <h5><span>$</span>${(Math.random() * 10 + 5).toFixed(2)}</h5>
              <a href="#" onclick="alert('Order for ${meal.strMeal} placed!')">
                Order Now
                <span><i class="ri-arrow-right-line"></i></span>
              </a>
            </div>
          </div>
        `;

        swiperWrapper.appendChild(swiperSlide);
      });

      // Initialize Swiper if not already initialized
      new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    })
    .catch(error => {
      console.error('Error fetching the menu:', error);
    });
});

// api data display ends here

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__tag", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
});

ScrollReveal().reveal(".client__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".client__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".client__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".client__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".client__details", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".client__rating", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".download__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
