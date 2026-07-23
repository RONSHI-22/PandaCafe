document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Back Button
    // ===========================

    const lo = document.getElementById("lo");

    if (lo) {
        lo.addEventListener("click", function () {

            document.body.classList.add("fade-out");

            setTimeout(function () {
                window.location.href = "../index.html";
            }, 500);

        });
    }

    // ===========================
    // Popup
    // ===========================

    const boxes = document.querySelectorAll(".infoBox");
    const popup = document.getElementById("popup");
    const title = document.getElementById("popupTitle");
    const text = document.getElementById("popupText");
    const close = document.getElementById("closePopup");

    if (popup && title && text && close) {

        boxes.forEach(box => {

            box.addEventListener("click", function () {

                title.textContent = box.dataset.title;
                text.textContent = box.dataset.info;

                popup.classList.add("show");

            });

        });

        close.addEventListener("click", function () {

            popup.classList.remove("show");

        });

        popup.addEventListener("click", function (e) {

            if (e.target === popup) {
                popup.classList.remove("show");
            }

        });

    }


// ===========================
// Owners / Mods Toggle
// ===========================

const button = document.getElementById("toggleBtn");
const owners = document.getElementById("ownersSection");
const mods = document.getElementById("modsSection");
const pageTitle = document.getElementById("title");

if (button && owners && mods && pageTitle) {

    let showingOwners = true;

    button.addEventListener("click", function () {

        const current = showingOwners ? owners : mods;
        const next = showingOwners ? mods : owners;

        // Fade out current section
        current.classList.add("fade-out");

        setTimeout(function () {

            current.classList.add("hidden");
            current.classList.remove("fade-out");

            next.classList.remove("hidden");

            // Start faded
            next.classList.add("fade-out");

            // Trigger fade in
            setTimeout(function () {
                next.classList.remove("fade-out");
            }, 10);

            if (showingOwners) {
                pageTitle.textContent = "MEET THE MODS";
                button.textContent = "SEE OWNERS";
            } else {
                pageTitle.textContent = "MEET THE OWNERS";
                button.textContent = "SEE MODS";
            }

            showingOwners = !showingOwners;

        }, 500);

    });

}
});


