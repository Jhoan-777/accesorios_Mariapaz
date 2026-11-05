// ==================================
// MENÚ RESPONSIVE
// ==================================

const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });

    // Cerrar menú al seleccionar una página

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ==================================
// AÑO AUTOMÁTICO
// ==================================

document.querySelectorAll(".year").forEach((element) => {

    element.textContent = new Date().getFullYear();

});


// ==================================
// FORMULARIO DE CONTACTO
// ==================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        // Obtener los datos del formulario

        const name = document
            .querySelector("#name")
            .value
            .trim();

        const message = document
            .querySelector("#message")
            .value
            .trim();

        // Número de WhatsApp con indicativo de Colombia

        const phone = "573024208879";

        // Crear mensaje

        const text = `Hola, soy ${name}. ${message}`;

        // Crear enlace de WhatsApp

        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // Abrir WhatsApp

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    });

}