/*=====================================
        MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});

/*=====================================
      CLOSE MENU AFTER CLICK
=====================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    });

});

/*=====================================
        STICKY NAVBAR
=====================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "16px 0";
        navbar.style.background = "rgba(14,15,19,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.padding = "22px 0";
        navbar.style.background = "rgba(14,15,19,.75)";
        navbar.style.boxShadow = "none";

    }

});

/*=====================================
          TYPING EFFECT
=====================================*/

new Typed(".typing", {

    strings: [

        "Frontend Developer",


        "BCA Student"

    ],

    typeSpeed: 80,

    backSpeed: 45,

    loop: true

});

/*=====================================
          AOS
=====================================*/

AOS.init({

    duration: 900,

    once: true

});

/*=====================================
        VANILLA TILT
=====================================*/

VanillaTilt.init(

    document.querySelectorAll(

        ".project-card,.skill-box,.info-card,.timeline-card"

    ),

    {

        max: 10,

        speed: 400,

        glare: true,

        "max-glare": 0.15

    }

);

/*=====================================
        SCROLL TOP
=====================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=====================================
      ACTIVE NAV LINK
=====================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*===========================
      PAGE LOADER
===========================*/

window.addEventListener("load", () => {

    document.querySelector(".loader").classList.add("hide");

});


/*===========================
      CURSOR
===========================*/

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";

    blur.style.top = e.clientY + "px";

});


/*===========================
     SCROLL PROGRESS
===========================*/

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let percent = (scrollTop / scrollHeight) * 100;

    progress.style.width = percent + "%";

});


/*===========================
      REVEAL
===========================*/

const reveal = document.querySelectorAll(".section");

function revealSection() {

    reveal.forEach(sec => {

        let top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            sec.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();
/*==========================
      PARALLAX HERO
==========================*/

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 45;

    const y = (window.innerHeight / 2 - e.pageY) / 45;

    document.querySelector(".image-box").style.transform =
        `translate(${x}px,${y}px)`;

});

// ================================
// EMAIL JS
// ================================

emailjs.init("RARPcxCyXbh6F7lg8");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_cggacbz",
        "template_6q4n7kk",
        this
    )
        .then(() => {

            alert("Message Sent Successfully ✅");

            form.reset();

        })
        .catch((error) => {
            console.log("EmailJS Error:", error);

            if (error.text) {
                console.log(error.text);
            }

            alert(error.text || "Failed");
        });


});