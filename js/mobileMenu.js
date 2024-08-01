
class NavBar {
    constructor(mobileMenu, navList, navListLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navListLinks = document.querySelectorAll(navListLinks);
        this.activeClass = "active";
    };

    handleClick() {
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navList.classList.toggle(this.activeClass);
    };

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    };

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        };
    };
}

const navBar = new NavBar(
    ".header-nav-mobile",
    ".header-nav-list",
    ".header.nav-list li"
);

navBar.init();