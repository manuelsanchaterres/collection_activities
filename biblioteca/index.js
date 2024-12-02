const linkItems = document.querySelectorAll(".links-item");
let newWindow;
linkItems.forEach(linkItem => {
    
    linkItem.addEventListener("click", () => {

        // deshabilitamos el clic del resto de elementos
        linkItems.forEach(otherItem => {
            if (otherItem !== linkItem) {

                otherItem.classList.add("disabled");
            }
        });

        // eliminamos la clase antes de aplicarla al item clicado
        linkItems.forEach(linkItem => {
            linkItem.classList.remove("translatespin");
        });

        setInterval(() => {

            newWindow = linkItem.getAttribute("href");
            localStorage.setItem("biblioteca",`${window.location}`);
            window.location = newWindow;
            
        }, 3500);

        linkItem.style.setProperty('pointer-events', 'none');
        
        translatespin(linkItem);

    })
});

function translatespin(element) {
    // Get the element's current position
    const rect = element.getBoundingClientRect();

    // Calculate its current horizontal and vertical positions
    const left = rect.left; // Current horizontal position
    const top = rect.top; // Current vertical position

    // Set custom properties for CSS variables
    element.style.setProperty('--start-left', `${left}px`);
    element.style.setProperty('--start-top', `${top}px`);

    // Add the animation class
    element.classList.add('translatespin');
}

