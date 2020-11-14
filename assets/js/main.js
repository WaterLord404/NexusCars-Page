
let header__button = document.getElementById('header__button');

let drop_down_menu = document.getElementById('drop-down-menu');

let drop_down_submenu = document.getElementById('drop-down-submenu');

let category = document.getElementById('drop-down-menu__first-option');


header__button.addEventListener('click', () => {
    if (drop_down_menu.classList.contains("drop-down-menu--hidden")) {
        drop_down_menu.classList.remove("drop-down-menu--hidden");
        drop_down_menu.classList.add("drop-down-menu");
    } else {
        drop_down_menu.classList.remove("drop-down-menu");
        drop_down_menu.classList.add("drop-down-menu--hidden");
        drop_down_submenu.classList.remove("drop-down-submenu");
        drop_down_submenu.classList.add("drop-down-submenu--hidden");
    }
})

category.addEventListener('click', () => {
    if (drop_down_submenu.classList.contains("drop-down-submenu--hidden")) {
        drop_down_submenu.classList.remove("drop-down-submenu--hidden");
        drop_down_submenu.classList.add("drop-down-submenu");
    } else {
        drop_down_submenu.classList.remove("drop-down-submenu");
        drop_down_submenu.classList.add("drop-down-submenu--hidden");
    }

})
