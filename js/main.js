// Mobile menu
const menuBtn = document.getElementById("btn-menu");
const sideMenu = document.getElementById("side-menu");

if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });

    sideMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => sideMenu.classList.remove("open"));
    });
}

// Menu category filter
const filterPills = document.querySelectorAll(".filter-pill");
const menuCategories = document.querySelectorAll(".menu-category");

filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
        filterPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const category = pill.dataset.filter;
        menuCategories.forEach((section) => {
            const matches = category === "All" || section.dataset.category === category;
            section.classList.toggle("is-hidden", !matches);
        });
    });
});

// Order Ahead modal
const orderOverlay = document.getElementById("order-overlay");
const orderClose = document.getElementById("order-close");
const orderContinue = document.getElementById("order-continue");

function openOrderModal() {
    orderOverlay.classList.add("open");
}

function closeOrderModal() {
    orderOverlay.classList.remove("open");
}

document.querySelectorAll(".order-btn").forEach((btn) => {
    btn.addEventListener("click", openOrderModal);
});

orderClose.addEventListener("click", closeOrderModal);
orderContinue.addEventListener("click", closeOrderModal);
orderOverlay.addEventListener("click", (e) => {
    if (e.target === orderOverlay) closeOrderModal();
});
