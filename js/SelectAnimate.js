const selectContainer = document.querySelector('.select-container');
const selectOptions = document.querySelector('.content-options');
const selectIcon = document.querySelector('.select-icon');
const select = document.querySelector('.select');


class SelectAnimate {
    constructor() {
        this.init();
    }

    init() {
        this.handleClick();
    }

    handleClick() {
        document.addEventListener('click', e => this.isActive(e.target));
    }

    isActive(el) {
        if (select.classList.contains('select-active') || !el.classList.contains('select')) {
            selectOptions.style.height = '0';
            selectIcon.style.transform = "rotate(0)";
            select.classList.remove('select-active');
            return;
        }

        select.classList.add('select-active');
        selectOptions.style.height = 'max-content';
        selectIcon.style.transform = "rotate(180deg)"
        return;

    }
}

const selectAnimate = new SelectAnimate();