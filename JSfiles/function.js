document.addEventListener("DOMContentLoaded", function () {

    const lo = document.getElementById("lo");

    lo.addEventListener("click", function () {

        document.body.classList.add("fade-out");

        setTimeout(function () {
            window.location.href = "../index.html";
        }, 500);

    });

});