// Loading Screen
window.addEventListener('load', () => {
  document.querySelector('.loading-screen').style.opacity = '0';
  setTimeout(() => document.querySelector('.loading-screen').style.display='none',500);
});
// Typing Animation
const typingText = ['Websites', 'Web Apps'];
let i=0, j=0;
const span = document.querySelector('.typing');
function type() {
  if(i < typingText.length){
    span.textContent = typingText[i].substring(0,j+1);
    j++;
    if(j === typingText[i].length){ setTimeout(()=>{i++; j=0; type();},1000); return; }
  } else { i=0; type(); return;}
  setTimeout(type,150);
}
type();

// Scroll Reveal
const revealElements = document.querySelectorAll('.glass');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight*0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom) el.style.opacity=1, el.style.transform='translateY(0)';
  });
});

// Navbar Active Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks.forEach(link => { if(link.getAttribute('href').includes(current)) link.classList.add('active'); });
});
const translations = {

  en: {
    heroTitle: "Hello, I'm ",
    heroText: "I build Responsive websites",
    heroBtn: "View My Work"
  },

  am: {
    heroTitle: "ሰላም፣ እኔ ",
    heroText: "ዘመናዊ እና Responsive ድህረ ገፆችን እገነባለሁ",
    heroBtn: "ስራዎቼን ይመልከቱ"
  }
};

function setLanguage(lang) {

  document.getElementById("hero-title").innerHTML =
    translations[lang].heroTitle +
    "<span>Zeru Bezabh</span>";

  document.getElementById("hero-text").textContent =
    translations[lang].heroText;

  document.getElementById("hero-btn").textContent =
    translations[lang].heroBtn;

  localStorage.setItem("language", lang);
}

/* LOAD SAVED LANGUAGE */
window.onload = () => {

  const savedLanguage =
    localStorage.getItem("language") || "en";

  setLanguage(savedLanguage);
};