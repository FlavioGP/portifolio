const contentOptions = document.querySelector('.content-options');
const selectSkills = document.querySelectorAll('.select-option');
const skillsContainers = document.querySelectorAll('.all-skills');


(function selectContainer() {
    contentOptions.addEventListener('click', e => {
        el = e.target;
        classContainer = `content-${el.id}`
        // console.log(el.id)


        for(let container of skillsContainers){
            // console.log(container);
            container.style.display = 'none';

            if(container.classList.contains(classContainer)){
                container.style.display = 'flex';
                if(!container.classList.contains('content-all')) {
                    container.style.marginTop = "50px";
                }
            }

        }
    });
})();
