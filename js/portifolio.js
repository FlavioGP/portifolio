const ul = document.querySelector('.projects');
const li = document.querySelectorAll('.project');
const contentProject = document.querySelector('.content-project');
const portifolio = document.querySelector('.portifolio .content-bottom');
const projectLink = document.querySelector('.project-link');

const projectsLink = {
    appEscola: 'https://github.com/FlavioGP/reactApp-Escola',
    apiRest: 'https://github.com/FlavioGP/api_rest',
    schedule: 'https://github.com/FlavioGP/Agenda',
    pokedex: 'https://github.com/FlavioGP/pokedex',
    calculator: 'https://github.com/FlavioGP/exercicio-calculadora',
    clones: 'https://github.com/FlavioGP/clones',
    fec: 'https://github.com/FlavioGP/frontend-challenges',
    toDoList: 'https://github.com/FlavioGP/lista-tarefas',
}

function projecActive() {
    li.forEach(el => {
        el.addEventListener('click', e => {
            const element = e.target;
            const id = element.id
            const image = element.children[0].src;
            
            portifolio.classList.add('project-active');
            contentProject.style.display = "flex";
            contentProject.style.backgroundImage = `url(${image})`;

            for (let key in projectsLink){
                if ( key === id){
                    projectLink.setAttribute('href', projectsLink[key])
                }
            }
        });
    });

    contentProject.addEventListener('click', e => {
        if (e.target.classList.contains('button-close')) {
            portifolio.classList.remove('project-active')
            contentProject.style.display = "none"
        }
    })

}

projecActive();
