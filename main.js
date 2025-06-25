/*SHOW MENU*/
const showMenu = (toggleID,navId) =>{
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // compensar altura do header fixo
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(".nav_menu a[href='#" + sectionId + "']");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add("active-link");
    } else {
      if (navLink) navLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


document.getElementById('scroll-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/*CHANGE BACKGROUND HEADER*/
function scrollHeader(){
 const header = document.getElementById('header');
     if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*SHOW SCROLLL TOP*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);
/*MIXITUP FILTER PORTIFOLIO*/

/*link active portifolio*/
const filterItems = document.querySelectorAll('.portfolio_item');
const portfolioContents = document.querySelectorAll('.filter-item');

filterItems.forEach(item => {
    item.addEventListener('click', function () {
        // Trocar classe ativa
        filterItems.forEach(el => el.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');

        const filter = this.getAttribute('data-filter');

        portfolioContents.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/*swiper carousel FALTA BAIXAR*/
/*const mySwiper = new Swiper('.testimonial_container', {
    spaceBetween:16,
    loop:true,
    grabCursor:true,

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});*/

/*CONTACTME*/

 function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado: " + text);
    }).catch(err => {
      console.error("Erro ao copiar", err);
    });
  }

  // Envio do formulário via AJAX para Formsubmit.co
  const form = document.getElementById('contact-form');
  const messageBox = document.getElementById('form-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/bielacristal@gmail.com', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if(data.success === "true" || data.message === "Success") {
        messageBox.style.display = 'block';
        form.reset();

        setTimeout(() => {
          messageBox.style.display = 'none';
        }, 5000);
      } else {
        alert('Erro ao enviar, tente novamente.');
      }
    })
    .catch(() => {
      alert('Erro ao enviar, tente novamente.');
    });
  });

/*gsap animation*/

gsap.from('.home_img', {opacity: 0, duration: 2, delay: .5, x: 60})
gsap.from('.home_data', {opacity: 0, duration: 2, delay: .8,  x:25})
gsap.from('.home_greeting, .home_name, .home_profession, .home_button', {opacity: 0, duration: 2, delay: 1, y:25, ease:'expo.out', stagger: .2})
gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2});
gsap.from('.nav_item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease:'expo.out', stagger: .2})
gsap.from('.home_social-icon', {opacity: 0, duration: 2, delay: 2.3, y:25, ease:'expo.out', stagger: .2})

/*botão whats*/
function toggleWhatsAppButton() {
  const contactSection = document.getElementById('contact');
  const whatsappBtn = document.getElementById('whatsapp-contact');
  const contactTop = contactSection.offsetTop;
  const contactHeight = contactSection.offsetHeight;
  const scrollY = window.pageYOffset;

  if (scrollY >= contactTop - 200 && scrollY <= contactTop + contactHeight) {
    whatsappBtn.style.display = 'flex';
  } else {
    whatsappBtn.style.display = 'none';
  }
}
window.addEventListener('scroll', toggleWhatsAppButton);