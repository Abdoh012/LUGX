const navBar = document.querySelector("nav"); // Navigation bar
const bottomFeatures = document.querySelector(".trend .bottom"); // Bottom section in trending
const animation = document.querySelector(".animation"); // Animation
const features = document.querySelectorAll(".features .bottom > div"); // Features in header
const featuresImages = document.querySelectorAll(
  ".features .bottom > div .img"
); // Features images in header
const ctaForm = document.querySelector(".cta form"); // Form in cta section
const ctaInput = document.querySelector(".cta form input"); // Input field in cta section
const gamesFilteringBtns = document.querySelectorAll(".games .buttons button"); // Buttons to filter games in our shop page
const moveBtns = document.querySelectorAll(".games .move-btns"); // Move Buttons in our shop page
const addInput = document.querySelector(".add-to-cart input"); // Add to cart input field
const reviewBtns = document.querySelectorAll(".reviews .header button"); // Review and description buttons
const reviewText = document.querySelectorAll(".reviews .text > div"); // Review and description text




document.addEventListener("scroll", () => {
  if (scrollY > 90) {
    navBar.style.cssText =
      "width: 100%; padding: 15px 0; background-color: var(--themeColor); position:fixed; left: 0; z-index: 5; transition-duration: var(--transitionDuration); box-shadow: #0000004f 0px 2px 11px 0px; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;";
    navBar.classList.add("slideIn");
    navBar.classList.remove("slideOut");
  } else {
    navBar.style.cssText = "position:none;";
    navBar.classList.remove("slideIn");
    navBar.classList.add("slideOut");
  }
});

// Hide animation onloading page after 2.5 seconds
setTimeout(() => {
  animation.style.cssText = "display: none;";
}, 1000);

// Window onload
window.addEventListener("load", () => {
  const menuBtn = document.querySelector(".menu-btn-1");
  const navUl = document.querySelector("nav ul");
  const pages = document.querySelectorAll(".pages li"); // Pages lis
  const btnSignIn = document.querySelector(".pages ul li:last-child button"); // Sign in button


  document.addEventListener("scroll", () => {
    if (scrollY > 90) {
      navUl.style.cssText = "bottom: 0px;";
    } else {
      navUl.style.cssText = "bottom: -30px;";
    }
  });
  // Give specific background to the current page li
  pages.forEach((ele) => {
    ele.classList.remove("current-page");
  });
  for (let i = 0; i < pages.length; i++) {
    if (document.body.id === "home") {
      pages[0].classList.add("current-page");
    } else if (document.body.id === "ourShop") {
      pages[1].classList.add("current-page");
    } else if (document.body.id === "productDetails") {
      pages[2].classList.add("current-page");
    } else if (document.body.id === "contactUs") {
      pages[3].classList.add("current-page");
    }
  }

  // On clicking sign in button go to the top of the page
  btnSignIn.addEventListener("click", () => {
    scrollTo(0, 0);
  });

  // Menu nav var
  function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
  }
  menuBtn.onclick = () => {
    menuBtnFunction(menuBtn);
    navUl.classList.toggle("show-nav");
  };
});

// Change background color of image in features in the header
features.forEach((ele, ind) => {
  // On mouse hover
  ele.addEventListener("mouseover", () => {
    featuresImages[ind].style.cssText =
      "background-color: var(--backgroundColor);";
  });
  // On mouse leave
  ele.addEventListener("mouseleave", () => {
    featuresImages[ind].style.cssText = "background-color: var(--themeColor)";
  });
  // On mouse click go to the top of the page
  ele.addEventListener("click", () => {
    scrollTo(0, 0);
  });
});

// Home JS
if (document.body.id === "home") {
  // On focus on cta input give the form border color blue
  ctaInput.addEventListener("focus", () => {
    ctaInput.style.cssText = "box-shadow: 0 0 0 5px rgba(13, 110, 253, 0.2);";
  });
  // On focus leave give the form border color blue
  ctaInput.addEventListener("blur", () => {
    ctaInput.style.cssText = "box-shadow: none;";
  });

  // Our Shop JS
} else if (document.body.id === "ourShop") {
  // Add active to the clicked button
  gamesFilteringBtns.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      gamesFilteringBtns.forEach((ele) => {
        ele.classList.remove("active");
        e.target.classList.add("active");
      });
    });
  });

  // On clicking move buttons go to the top of the page
  moveBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
      scrollTo(0, 0);
    });
  });

  // Initialize Isotope
  var iso = new Isotope(".grid", {
    itemSelector: ".game",
    layoutMode: "fitRows",
    fitRows: {
      gutter: 25,
    },
  });
  // Bind filter button click
  var filtersElem = document.querySelector(".filters");
  filtersElem.addEventListener("click", function (event) {
    if (!event.target.matches("button")) return;
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
  });
} else if (document.body.id === "productDetails") {
  // On focus on add to cart input give the input border color blue
  addInput.addEventListener("focus", () => {
    addInput.style.cssText =
      "box-shadow: 0 0 0 5px rgba(13, 110, 253, 0.2); border: 1px solid rgba(13, 110, 253, 0.5);";
  });
  // On focus leave give the input border color blue
  addInput.addEventListener("blur", () => {
    addInput.style.cssText = "box-shadow: none;";
  });

  // Show text related to the button
  reviewBtns.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      // Remove active class from all
      reviewBtns.forEach((ele) => {
        ele.classList.remove("active");
      });
      // Remove show-text class from all
      reviewText.forEach((ele) => {
        ele.classList.remove("show-text");
      });
      // Add active class to the clicked button
      e.target.classList.add("active");
      // Show the text based on the clicked button
      if (e.target.classList.contains("description")) {
        reviewText[0].classList.add("show-text");
      } else reviewText[1].classList.add("show-text");
    });
  });
}
