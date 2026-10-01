/* =========================================================
   HEART HEAVEN PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {

    const isOpen = nav?.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    const icon = menuToggle.querySelector("i");

    if (isOpen) {

        icon?.classList.remove("fa-bars");
        icon?.classList.add("fa-xmark");

    } else {

        icon?.classList.remove("fa-xmark");
        icon?.classList.add("fa-bars");

    }

});


/* =========================================================
   CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav?.classList.remove("open");

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuToggle?.querySelector("i");

        icon?.classList.remove("fa-xmark");
        icon?.classList.add("fa-bars");

    });

});


/* =========================================================
   DARK MODE
========================================================= */

const themeToggle = document.querySelector("#themeToggle");

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeToggle.textContent =
        isDark ? "☀" : "☾";

    localStorage.setItem(
        "heartHeavenTheme",
        isDark ? "dark" : "light"
    );

});


/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem("heartHeavenTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.textContent = "☀";

    }

}


/* =========================================================
   SOFT COLOR MODE
========================================================= */

const colorToggle =
    document.querySelector("#colorToggle");

colorToggle?.addEventListener("click", () => {

    document.body.classList.toggle(
        "soft-mode"
    );

    const isSoft =
        document.body.classList.contains(
            "soft-mode"
        );

    localStorage.setItem(
        "heartHeavenColor",
        isSoft ? "soft" : "normal"
    );

});


/* =========================================================
   LOAD SAVED COLOR MODE
========================================================= */

const savedColor =
    localStorage.getItem("heartHeavenColor");

if (savedColor === "soft") {

    document.body.classList.add(
        "soft-mode"
    );

}


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = [
    ...document.querySelectorAll(
        "main section[id]"
    )
];

const navLinks = [
    ...document.querySelectorAll(
        ".nav-links a"
    )
];


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        const target =
                            link.getAttribute("href");

                        link.classList.toggle(
                            "active",
                            target ===
                            `#${entry.target.id}`
                        );

                    });

                }

            });

        },

        {
            rootMargin:
                "-30% 0px -60% 0px",

            threshold: 0
        }

    );


sections.forEach(section => {

    observer.observe(section);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }

                const target =
                    document.querySelector(
                        targetID
                    );

                if (!target) {

                    return;

                }

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


/* =========================================================
   PROFILE IMAGE ERROR HANDLING
========================================================= */

const profileImage =
    document.querySelector(
        ".cat-frame img"
    );

profileImage?.addEventListener(
    "error",
    () => {

        console.warn(
            "cat.webp could not be loaded. " +
            "Make sure it is inside the images folder."
        );

    }
);


/* =========================================================
   PROJECT LINK HANDLING
========================================================= */

document
    .querySelectorAll(".project-button")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#"
                ) {

                    event.preventDefault();

                }

            }
        );

    });


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   LOCAL PROJECT / ACTIVITY COUNT
========================================================= */

const projectCount =
    document.querySelector("#projectCount");

if (projectCount) {

    projectCount.textContent =
        "2 Activities";

}


/* =========================================================
   FINAL CONSOLE MESSAGE
========================================================= */

console.log(
    "Heart Heaven Portfolio loaded successfully 💗"
);