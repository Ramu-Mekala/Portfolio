let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*=====================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height)
    {
        navLinks.forEach(link =>{
            link.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
    };
});

/*=========================== sticky navbar ========================== */
  let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

  /*=========================== remove toggle icon and navbar ========================== */
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
  };
  /*=========================== scroll reveal ========================== */
ScrollReveal({
   distance:'80px',
   duration: 2000,
   delay: 200,
});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-container, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});




var typed = new Typed('#element', {
    strings: ['Web Developer', 'FrontEnd Developer','JAVA Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_6g6gzhl",
        "template_fdm3ivg",
        this,
        "JRKuGV9q6OccX7jl1"
    )
    .then(() => {
    Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonColor: '#59B2F4',
        background: '#262840',
        color: '#fff'
    });

    form.reset();
})
.catch((error) => {
    console.error("EmailJS Error:", error);

    Swal.fire({
        title: 'Error!',
        text: 'Failed to send message.',
        icon: 'error',
        confirmButtonColor: '#ff4d4d',
        background: '#262840',
        color: '#fff'
    
});
});
});