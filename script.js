if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
} else {
  for (const btn of document.querySelectorAll('button')){
    btn.classList.add('no-touch', 'button');
  };
}

{ //Hamburger menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mainMenu = document.querySelector('.menu');

  window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth > 1030) {
      mainMenu.style.display = 'flex';
    } else {
      mainMenu.style.display = 'none';
    }
  })

  hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.style.display = 'none';
      mainMenu.style.display = 'block';
  
      document.addEventListener('click', function closeMenu(e) {
        if (e.target !== hamburgerMenu) {
          hamburgerMenu.style.display = 'block';
          mainMenu.style.display = 'none';
  
          document.removeEventListener('click', closeMenu);
        }
      });
  
      mainMenu.addEventListener('mouseleave', function closeMenu() {
        hamburgerMenu.style.display = 'block';
        mainMenu.style.display = 'none';
  
        mainMenu.removeEventListener('mouseleave', closeMenu);
      }); 
  });
}

{ //First slider
  let images = document.querySelector('.completed-projects').getElementsByClassName('inner-wrapper');
  let points = document.querySelector('.completed-projects').querySelectorAll('.slider-point');
  let description = document.querySelector('.completed-projects').querySelectorAll('.label');
  let backButton = document.querySelector('.completed-projects').querySelector('.slider-button-back-wrapper');
  let forwardButton = document.querySelector('.completed-projects').querySelector('.slider-button-forward');
  let currentPoint = points[0];
  let currentDescription = description[0];
  let index = 0;
  let move = 0;

  getIndex1(index);

  function getIndex1(n) {
    changeSlide(index += n, n);
  };

  function changeSlide(n, m) {

    currentPoint.style.opacity = "0.3";
    currentDescription.style.opacity = "0.3";
    currentDescription.removeAttribute("id");

    index = (n < 0) ? points.length - 1 : (n > points.length - 1) ? 0 : n;

    forwardButton.style.display = "block";
    backButton.style.display = "block";
    if (index == 0) {
      backButton.style.display = "none";
      forwardButton.style.display = "block";
    } else if (index == points.length - 1) {
      forwardButton.style.display = "none";
      backButton.style.display = "block";
    }

    if (document.documentElement.clientWidth <= 650) {
      if (index == 0) {
        move = 0;
      } else if (index == points.length - 1) {
        move = -700;
      } else if (m == 1) {
        move -= 350;
      } else if (m == -1) {
        move += 350;
      }
    } else {
      if (index == 0) {
        move = 0;
      } else if (index == points.length - 1) {
        move = -1200;
      } else if (m == 1) {
        move -= 650;
      } else if (m == -1) {
        move += 650;
      }
    }

    images[0].style.transition = "0.5s";
    images[0].style.transform = `translateX(${move}px`;

    points[index].style.opacity = "1";
    description[index].id = "active";
    description[index].style.opacity = "1";

    currentImage = images[index];
    currentPoint = points[index];
    currentDescription = description[index];
  }
}

{ //Second slider
  let images = document.querySelector('.six-steps').querySelector('.image-box__image-wrapper').children;
  let points = document.querySelector('.six-steps').querySelectorAll('.slider-point');
  let description = document.querySelector('.six-steps').querySelectorAll('.inner-wrapper');
  let counter = document.querySelector('.counter');
  let currentImage = images[0];
  let currentPoint = points[0];
  let currentDescription = description[0];
  let index = 0;

  for (let i = 0; i < description.length; i++) {
    let j = i

    description[i].addEventListener("click", function () {
      if (index == j) {
        return;
      }
      changeSlide(j);
    })
  }

  getIndex(index);

  function getIndex(n) {
    changeSlide(index += n);
  };

  function changeSlide(n) {

    currentImage.style.display = "none";
    currentPoint.style.opacity = "0.3";
    currentDescription.style.opacity = "0.3";
    currentDescription.style.transform = "scale(1)";

    index = (n < 0) ? images.length - 1 : (n > images.length - 1) ? 0 : n;

    images[index].style.display = "block";
    points[index].style.opacity = "1";
    description[index].style.opacity = "1";
    description[index].style.transform = "scale(1.1)";
    counter.innerHTML = `${index+1}/6`;

    currentImage = images[index];
    currentPoint = points[index];
    currentDescription = description[index];
  }
}

{ //Third Slider
  let images = document.querySelector(".architecture-styles").querySelector(".img-box-1").children;
  let currentImage = images[0];
  let index = 0;
  changeSlide(0);

  function changeSlide(n) {
    currentImage.style.display = "none";
    index += n;
    if (index < 0) {
      index = images.length - 3;
    } else if (index > images.length - 3) {
      index = 0;
    }

    images[index].style.display = "block"
    currentImage = images[index];
  }
}

{ //Validation
  let names = document.querySelectorAll('.input-name');
  let phone = document.querySelectorAll('.input-phone');
  for (let item of names) {
    item.addEventListener('keydown', function () {
      setTimeout(() => {
        if (item.value[item.value.length - 1] < 'a' || item.value[item.value.length - 1] > 'z') {
          item.value = "";
          item.style.background = "red";
          setTimeout(() => {
            item.style.background = "transparent";
          }, 1000);
        }
      }, 100);
    })
  }

  for (let item of phone) {
    item.addEventListener('keydown', function () {
      setTimeout(() => {
        if (!parseInt(item.value[item.value.length - 1])) {
          item.value = "";
          item.style.background = "red";
          setTimeout(() => {
            item.style.background = "transparent";
          }, 1000);
        }
      }, 100);
    })
  }
}