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
const searchInput = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");
const resultsMessage = document.getElementById("resultsMessage");

let selectedCategory = "todos";

function filterProducts() {

    const searchText = searchInput.value.toLowerCase();

    let visibleProducts = 0;

    products.forEach(product => {

        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category;

        const matchesName = name.includes(searchText);

        const matchesCategory =
            selectedCategory === "todos" ||
            category === selectedCategory;

        if (matchesName && matchesCategory) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }

    });

    resultsMessage.textContent =
        visibleProducts === 0
        ? "No encontramos productos con esa búsqueda."
        : "Productos encontrados: " + visibleProducts;
}

searchInput.addEventListener("input", filterProducts);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterProducts();

    });

});
