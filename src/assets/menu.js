function showMenu(e){
    let menu = e.currentTarget.querySelector(".al-menu");
    let menuData = e.currentTarget.closest(".al-menu-data");
    let height = menuData.offsetHeight;

    menu.classList.toggle("al-menu-visible");
    menu.style.top = `${height}px`;
    
}

function removeMenusHandler(e){
    let menus = document.getElementsByClassName("al-menu");

    if(e.target.parentElement == null)
        return;

    if(!e.target.parentElement.classList.contains("al-menu-data")){
        for(let i = 0; i < menus.length; i++)
            menus[i].classList.remove("al-menu-visible");

        return;
    }

    let menu = e.target.parentElement.querySelector(".al-menu");
    for(let i = 0; i < menus.length; i++)
        if(menus[i].offsetParent != menu.offsetParent)
            menus[i].classList.remove("al-menu-visible");
}

function prova(e){
    let menu = e.currentTarget.querySelector(".al-menu");
    menu.classList.toggle("al-menu-visible");
}

export {showMenu, removeMenusHandler, prova};