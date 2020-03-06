let isNight = false;



// CLOUD THOUGHTS --------------------------

const cloudPhrases = ["hello", "one day I'll become a real big cloud...", "what a great day to be a cloud:)",
  "I feel sunshine on my belly", "I think other clouds don't notice me...", "I wonder if there are clouds on other planets.." ];
let thought = document.getElementById('thought');

setInterval(getRandomThought, 10000);

function getRandomThought() {
  let randomThought = cloudPhrases[Math.floor(Math.random() * cloudPhrases.length)];
  thought.innerHTML = randomThought;

}

// NAVBAR ANIMATION --------------------------

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos <= 0) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// NIGHT MODE --------------------------

function nightMode() {
  let style = document.documentElement.style;
  let toggle = document.getElementById('switch');
  let trees = document.getElementById('trees');
  // let bg = document.getElementById('bg');
  // let clouds = document.getElementsByClassName('cloud');
  
  if (!isNight) {
    style.setProperty('--sky_color', '#7f66af');
    style.setProperty('--containers_color', '#575757');
    style.setProperty('--text_color', 'white');
    style.setProperty('--cloud_color', 'rgb(128, 108, 165)');
    style.setProperty('--skills_color', 'rgba(173, 173, 173, 0.8)');
    style.setProperty('--window_color', 'rgba(134, 74, 230, 0.527)');

    toggle.setAttribute('src', 'img/night_on.png');
    trees.setAttribute('src', 'img/trees_night.svg');
  //   bg.style.background = "linear-gradient(#7f66af, white)";
    isNight = true;
  //   for (let elem of clouds) {
  //     elem.setAttribute('class', 'cloud nightCloud');
  //   }
  } else {
    style.setProperty('--sky_color', '#00b4ff');
    style.setProperty('--containers_color', 'white');
    style.setProperty('--text_color', 'rgb(95, 95, 95)');
    style.setProperty('--cloud_color', 'white');
    style.setProperty('--skills_color', 'rgba(255, 255, 255, 0.8)');
    style.setProperty('--window_color', 'rgba(74, 219, 230, 0.527)');

    toggle.setAttribute('src', 'img/day_on.png');
    trees.setAttribute('src', 'img/trees.svg');
  //   bg.style.background = "linear-gradient(#00b4ff, white)";
    isNight = false;
  //   for (let elem of clouds) {
  //     elem.setAttribute('class', 'cloud');
  //   }
  }

}

// MENU ICON --------------------------
function myFunction() {
  let x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}



// SCREEN SLIDE --------------------------

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

