
const options = document.querySelector('.options');
const containers = document.querySelectorAll('.container');
const checkbox = document.querySelector('input[type="checkbox"]')


options.addEventListener('click', (e) => {
    const el = e.target;
    if(!el.classList.contains('menu-opt')) return;
    toggleList(el);
    checkbox.checked = false;
    containers.forEach(container => {
        container.classList.contains(el.id) ?
            container.style.display = 'block' :
            container.style.display = 'none';
    });

});

let elCurrent = document.getElementById('about');
function toggleList(el) {
    let elClick = document.getElementById(el.id);
    elClick.style.display = 'none';
    elCurrent.style.display = 'block';
    elCurrent = elClick;
}