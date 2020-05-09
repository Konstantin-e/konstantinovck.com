const projectDescription = [
  'A web player with custom design built with React. The songs can be loaded by adding\
    new url addresses to the corresponding file',
  'A website/blog/e-commerce shop for travelers and bird watchers made with Wordpress', 
  'A sandbox game where you can build a pixelated landscape by adding different elements. \
    Built with Vanilla Javascript.', 
  'A React module app that translates entered word by going through Yandex API.', 
  'My attempt to recreate the design of a certian website.', 
  'An attempt to recreate the design of a certain website.'];

const urls = [
  'https://github.com/Konstantin-e/my_music_website',
  'http://curiousfalcon.com',
  'https://github.com/Konstantin-e/God-Mode-Game',
  'https://github.com/Konstantin-e/Translate-me',
  'https://github.com/Konstantin-e/toronto_zoo',
  'https://github.com/Konstantin-e/project_2'
]

let isNight = false;
const descriptionDiv = document.getElementById('description');
const projectImg = document.getElementsByClassName('project-img');
const projects = document.getElementsByClassName('project');
const body = document.getElementsByTagName('body')[0];
const descriptions = document.getElementsByClassName('description');



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


// PROJECT HOVER --------------------------

  for (let i = 0; i < projectImg.length; i++) {
    projectImg[i].addEventListener('mouseover', () => {
      if (window.innerWidth >= 800) {
        descriptionDiv.setAttribute("style", "display: block");
        descriptionDiv.innerHTML = projectDescription[i] + `<a href=${urls[i]} target="_blank"><div style="bottom: 0;" class="my-button">More</div></a>`;
      } else {
        projectImg[i].setAttribute("style", "display: none");
        descriptions[i].setAttribute("style", "display: block");
        descriptions[i].innerHTML = projectDescription[i] + `<a href=${urls[i]} target="_blank"><div style="bottom: 0;" class="my-button">More</div></a>`;

        projects[i].addEventListener("mouseleave", () => {
          projectImg[i].setAttribute("style", "display: block");
          descriptions[i].setAttribute("style", "display: none");
          descriptions[i].innerHTML = "";
        })
      }

      
    })
  }

descriptionDiv.addEventListener("mouseleave", () => {
  descriptionDiv.setAttribute("style", "display: none");
})


