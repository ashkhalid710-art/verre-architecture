// =========================
// VÉRRE — MAIN JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // HEADER SCROLL EFFECT
    // =========================

    const header = document.querySelector(".header");

    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();


    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-label", "Open menu");
            });
        });
    }


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements = document.querySelectorAll(
        ".section-top, .two-column > div, .feature-image, .service, .projects-intro, .project, .philosophy-content, .approach-intro, .process-grid article, .contact-heading, #contactForm"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observerInstance.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    // =========================
    // CONTACT FORM
    // =========================

    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            formMessage.textContent =
                "Thank you. Your enquiry has been received.";

            formMessage.classList.add("show");

            contactForm.reset();

        });

    }


    // =========================
    // IMAGE ERROR HANDLING
    // =========================

    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const parent = image.parentElement;

            if (parent) {
                parent.style.background =
                    "linear-gradient(135deg, #d8d0c4, #8b8174)";
            }

        });

    });

});