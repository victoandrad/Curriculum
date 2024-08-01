
class NavBar {
    constructor(mobileMenu, navList, navListLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navListLinks = document.querySelectorAll(navListLinks);
        this.activeClass = "active";
    };

    animateLinks() {
        this.navListLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `animationLink 0.3s ease-in forwards ${index * 0.3}s`
            }
        });
    };

    handleClick() {
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
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
    ".header-nav-list li"
);

navBar.init();