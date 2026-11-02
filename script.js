/* ==========================================================================
   GOD OF PROMPT — INTERACTIVE JAVASCRIPT ENGINE (script.js)
   ========================================================================== */

// 👇 APNA LOGO LINK YAHAN PASTE KAREIN (Quotes "" ke beech mein) 👇
// Example: const SITE_LOGO_URL = "https://www.godofprompt.pro/logo.png";
const SITE_LOGO_URL = "";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Automatic Logo Loader (Header, Footer & Favicon)
    const headerLogoImg = document.getElementById("header-logo-img");
    const headerLogoFallback = document.getElementById("header-logo-fallback");
    const footerLogoImg = document.getElementById("footer-logo-img");
    const footerLogoFallback = document.getElementById("footer-logo-fallback");
    const siteFavicon = document.getElementById("site-favicon");

    if (SITE_LOGO_URL && SITE_LOGO_URL.trim() !== "") {
        if (headerLogoImg && headerLogoFallback) {
            headerLogoImg.src = SITE_LOGO_URL;
            headerLogoImg.classList.remove("hidden");
            headerLogoFallback.classList.add("hidden");
        }
        if (footerLogoImg && footerLogoFallback) {
            footerLogoImg.src = SITE_LOGO_URL;
            footerLogoImg.classList.remove("hidden");
            footerLogoFallback.classList.add("hidden");
        }
        if (siteFavicon) {
            siteFavicon.href = SITE_LOGO_URL;
        }
    }

    // 2. Mobile Navigation Drawer Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("menu-icon-open");
    const iconClose = document.getElementById("menu-icon-close");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                iconOpen.classList.add("hidden");
                iconClose.classList.remove("hidden");
            } else {
                mobileMenu.classList.add("hidden");
                iconOpen.classList.remove("hidden");
                iconClose.classList.add("hidden");
            }
        });

        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                iconOpen.classList.remove("hidden");
                iconClose.classList.add("hidden");
            });
        });
    }

    // 3. Interactive Plan Recommender & WhatsApp Link Builder
    const sectorSelect = document.getElementById("calc-sector");
    const goalSelect = document.getElementById("calc-goal");
    const planTitle = document.getElementById("calc-plan-title");
    const planDesc = document.getElementById("calc-plan-desc");
    const waLink = document.getElementById("calc-wa-link");

    const planData = {
        starter: {
            title: "STARTER PLAN — ₹1,499 / month",
            desc: "Great for starting out: 15 Feed Posts, 2–4 UGC Reels, 7 Stories & SEO Captions."
        },
        basic: {
            title: "BASIC PLAN — ₹2,499 / month (★ Most Popular)",
            desc: "Ideal for daily consistency: 30 Feed Posts, 8 UGC Reels (Single Model) & Daily Stories."
        },
        standard: {
            title: "STANDARD PLAN — ₹7,999 / month",
            desc: "Full omnichannel dominance: 30 Branded Multi-Model Reels, 30 FB/Threads/YT Thumbnails & Festival Creatives."
        },
        school: {
            title: "CUSTOM SCHOOL & COACHING AI SUITE",
            desc: "CBSE/ICSE/State Board customized exam papers, Bloom's Taxonomy MCQs & worksheets with your institution logo."
        }
    };

    function updateRecommendation() {
        if (!sectorSelect || !goalSelect) return;
        const sector = sectorSelect.value;
        const goalKey = goalSelect.value;
        const selected = planData[goalKey] || planData.basic;

        planTitle.textContent = selected.title;
        planDesc.textContent = selected.desc;

        const message = `Hi God of Prompt! I used your Plan Finder on the website.\n• Sector: ${sector}\n• Selected Package: ${selected.title}\nPlease share the next steps!`;
        waLink.href = `https://wa.me/918112596982?text=${encodeURIComponent(message)}`;
    }

    if (sectorSelect && goalSelect) {
        sectorSelect.addEventListener("change", updateRecommendation);
        goalSelect.addEventListener("change", updateRecommendation);
        updateRecommendation();
    }

    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const trigger = item.querySelector(".faq-trigger");
        const content = item.querySelector(".faq-content");
        const icon = item.querySelector(".faq-icon");

        if (trigger && content) {
            trigger.addEventListener("click", () => {
                const isOpen = !content.classList.contains("hidden");
                // Close all other items
                faqItems.forEach((other) => {
                    other.querySelector(".faq-content").classList.add("hidden");
                    other.querySelector(".faq-icon").textContent = "+";
                });

                if (!isOpen) {
                    content.classList.remove("hidden");
                    icon.textContent = "−";
                }
            });
        }
    });
});
