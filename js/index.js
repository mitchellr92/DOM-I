const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Created nav bar
const nav = document.querySelector("nav");
const navChildren = document.querySelectorAll("nav a");
navChildren[0].innerHTML = siteContent['nav']['nav-item-1'];
navChildren[1].innerHTML = siteContent['nav']['nav-item-2'];
navChildren[2].innerHTML = siteContent['nav']['nav-item-3'];
navChildren[3].innerHTML = siteContent['nav']['nav-item-4'];
navChildren[4].innerHTML = siteContent['nav']['nav-item-5'];
navChildren[5].innerHTML = siteContent['nav']['nav-item-6'];

// Turned all nav items green
navChildren.forEach(function (item) {
  item.style.color = 'green';
})

// Added new item to the beginning of the nav bar
const firstNavItem = document.createElement('a');
firstNavItem.innerHTML = 'Stuff';
firstNavItem.style.color = 'green';
nav.prepend(firstNavItem);

// Added new item to the end of the nav bar
const lastNavItem = document.createElement('a');
lastNavItem.innerHTML = 'Things';
lastNavItem.style.color = 'green';
nav.appendChild(lastNavItem);

// Filled in all cta content
const title = document.querySelector('.cta-text h1');
title.innerHTML = siteContent['cta']['h1'];
  
const cta = document.getElementById("cta-img");
cta.src = "img/header-img.png";

const button = document.querySelector('button');
button.innerHTML = 'Get Started';

// Filled in top content
const topContentTitle = document.querySelectorAll('.top-content h4');
topContentTitle[0].innerHTML = siteContent['main-content']['features-h4'];
topContentTitle[1].innerHTML = siteContent['main-content']['about-h4'];

const topContent = document.querySelectorAll('.top-content p');
topContent[0].innerHTML = siteContent['main-content']['features-content'];
topContent[1].innerHTML = siteContent['main-content']['about-content'];

// Middle image
const middleImg = document.getElementById('middle-img');
middleImg.src = "img/mid-page-accent.jpg";

// Filled in bottom content
const bottomContentTitle = document.querySelectorAll('.bottom-content h4');
bottomContentTitle[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentTitle[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentTitle[2].innerHTML = siteContent['main-content']['vision-h4'];

const bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].innerHTML = siteContent['main-content']['services-content'];
bottomContent[1].innerHTML = siteContent['main-content']['product-content'];
bottomContent[2].innerHTML = siteContent['main-content']['vision-content'];

// Created contact info
const contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];

// Created footer
const footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];

