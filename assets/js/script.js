document.addEventListener("DOMContentLoaded", function () {
    const hamBurger = document.querySelector(".toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const navbar = document.getElementById('nav');
    const navbarBrand = document.querySelector('.navbar-brand');
    const mainBody = document.querySelector('.mainbody')

    hamBurger.addEventListener("click", function () {
        sidebar.classList.toggle("expand");
        navbarBrand.classList.toggle("navbar-brand-expanded");
        mainBody.classList.toggle("main-body");
    });

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY > 50;
        if (scrolled) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});




// close the toggle menu if user clicks outside of the menu

document.addEventListener('click', function (event) {
    var toggleInputs = document.querySelectorAll('.toggle > input');
    var toggleContainers = document.querySelectorAll('.toggle');

    toggleInputs.forEach(function (input) {
        if (input.checked && !isDescendant(event.target, input.parentElement)) {
            input.checked = false;
        }
    });

    function isDescendant(child, parent) {
        var node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
});
