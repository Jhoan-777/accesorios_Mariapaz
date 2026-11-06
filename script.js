
// ==================================
// MENÚ RESPONSIVE
// ==================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");

        });

    });

}


// ==================================
// AÑO AUTOMÁTICO
// ==================================

document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
});


// ==================================
// FORMULARIO DE CONTACTO
// ==================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        const phone = "573024208879";

        const text = `Hola, soy ${name}. ${message}`;

        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");

    });

}


// ==================================
// BUSCADOR Y FILTROS DE PRODUCTOS
// ==================================

const searchInput = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");
const resultsMessage = document.getElementById("resultsMessage");

if (searchInput && products.length > 0) {

    let selectedCategory = "todos";

    function filterProducts() {

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        let visibleProducts = 0;

        products.forEach(product => {

            const productName = (
                product.dataset.name ||
                product.querySelector("h2")?.textContent ||
                ""
            ).toLowerCase();

            const category = product.dataset.category || "otros";

            const matchesName = productName.includes(searchText);

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

        if (resultsMessage) {

            resultsMessage.textContent = visibleProducts === 0
                ? "No encontramos productos con esa búsqueda."
                : "Productos encontrados: " + visibleProducts;

        }

    }

    searchInput.addEventListener("input", filterProducts);

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            selectedCategory = button.dataset.category;

            filterProducts();

        });

    });

}
