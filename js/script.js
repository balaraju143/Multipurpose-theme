/*==============================
    PRELOADER
==============================*/
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 2000);   // Show loader for 2 seconds

    }

});


/*==============================
    MOBILE MENU
==============================*/
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    hamburger.classList.toggle("active");

});



/*==============================
    SCROLL PROGRESS BAR
==============================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (progressBar) {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + "%";
    }

});


/*==============================
    BACK TO TOP
==============================*/



/*==============================
    SCROLL REVEAL
==============================*/

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach(element => {
    observer.observe(element);
});


/*==============================
    COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 100;

                const updateCounter = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.floor(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText =
                            target.toLocaleString();

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/*==============================
    FAQ ACCORDION
==============================*/

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


/*==============================
    TESTIMONIAL SLIDER
==============================*/

const testimonials =
    document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function rotateTestimonials() {

    if (testimonials.length === 0) return;

    testimonials.forEach(card => {
        card.style.display = "none";
    });

    const visibleCards = 3;

    for (let i = 0; i < visibleCards; i++) {

        const index =
            (testimonialIndex + i) %
            testimonials.length;

        testimonials[index].style.display = "block";
    }

    testimonialIndex++;

}

if (window.innerWidth <= 768) {

    setInterval(rotateTestimonials, 4000);

    rotateTestimonials();

}


/*==============================
    NEWSLETTER FORM
==============================*/

const newsletterForm =
    document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const email =
                this.querySelector("input");

            if (email.value.trim() !== "") {

                alert(
                    "Thank you for subscribing!"
                );

                this.reset();
            }

        }
    );

}


/*==============================
    SMOOTH SCROLL
==============================*/

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/*==============================
    LOGIN PASSWORD TOGGLE
==============================*/

const passwordToggle =
    document.querySelector(".toggle-password");

if (passwordToggle) {

    passwordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.querySelector(
                    ".password-input"
                );

            if (
                password.type === "password"
            ) {

                password.type = "text";

            } else {

                password.type = "password";

            }

        }
    );

}


/*==============================
    REGISTER PASSWORD STRENGTH
==============================*/

const registerPassword =
    document.querySelector(
        "#registerPassword"
    );

if (registerPassword) {

    registerPassword.addEventListener(
        "input",
        function () {

            const strength =
                document.querySelector(
                    ".strength-bar"
                );

            const value =
                this.value.length;

            if (value < 4) {

                strength.style.width = "25%";

            } else if (value < 8) {

                strength.style.width = "60%";

            } else {

                strength.style.width = "100%";

            }

        }
    );

}


/*==============================
    IMAGE TILT EFFECT
==============================*/

const tiltCards =
    document.querySelectorAll(".tilt");

tiltCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                -(y - rect.height / 2) / 20;

            const rotateY =
                (x - rect.width / 2) / 20;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    );

});


/*==============================
    CONSOLE MESSAGE
==============================*/

console.log(
    "%cStackly Theme Loaded Successfully 🚀",
    "color:#4F46E5;font-size:16px;font-weight:bold;"
);

