document.addEventListener("DOMContentLoaded", () => {

    const whatsappNumber = "254701227216"; // Your WhatsApp number

    /* ============================
       MOBILE NAVIGATION MENU
    ============================ */
    const header = document.querySelector("header");
    const nav = header?.querySelector("nav ul");

    if (header && nav) {
        const toggleBtn = document.createElement("button");
        toggleBtn.classList.add("menu-toggle");
        toggleBtn.setAttribute("aria-label", "Toggle navigation menu");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.appendChild(toggleBtn);

        const toggleMenu = () => {
            const isOpen = nav.classList.toggle("show");
            toggleBtn.setAttribute("aria-expanded", isOpen);
            toggleBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        };

        toggleBtn.addEventListener("click", toggleMenu);

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (nav.classList.contains("show")) toggleMenu();
            });
        });

        document.addEventListener("click", e => {
            if (!header.contains(e.target) && nav.classList.contains("show")) toggleMenu();
        });
    }

    /* ============================
       SERVICE CARD BUTTONS
    ============================ */
    const serviceButtons = document.querySelectorAll(".whatsapp-btn");

    serviceButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const card = btn.closest(".card");
            const serviceName = card?.dataset.service || "General Inquiry";
            const message = encodeURIComponent(`Hello! I am interested in your ${serviceName} services. Kindly assist.`);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappURL, "_blank");
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    let current = 0;
    const total = slides.length;

    const nextSlide = () => {
        slides[current].classList.remove("active");
        current = (current + 1) % total;
        slides[current].classList.add("active");
    };

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

