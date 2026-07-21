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

});