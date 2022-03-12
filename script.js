const menuContainer = document.querySelector('.menu-container');
const menuElements = document.querySelectorAll('.menu-container,.hamburger-container,nav,ul li');

menuContainer.addEventListener('click', e => {
    if (e.target.matches('nav *,nav')) return;
    else {
        menuElements.forEach(element => {
            element.classList.toggle('open');
        });
    }
});

document.querySelectorAll('.collapsible-list-item>a').forEach(element => {
    element.addEventListener('click', function(){
        this.classList.toggle('open');
        const collapsibleList = this.nextElementSibling;
        if (collapsibleList.style.height) collapsibleList.style.height = null;
        else collapsibleList.style.height = collapsibleList.scrollHeight + "px";
    });
});