
// modal
const dialog = document.querySelector('dialog')
const openBtn = document.querySelector('.btn_white')
const closeBtn = dialog.querySelector('.modal__close')

openBtn.onclick = () => {
    dialog.showModal()
}

closeBtn.onclick = () => {
    dialog.close()
}


const form = document.getElementById('exampleForm');
const inputs = form.querySelectorAll('input[required]');

function validateInput(input) {
    const formGroup = input.parentElement;
    if (!input.validity.valid) {
        formGroup.classList.add('error');
    } else {
        formGroup.classList.remove('error');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', () => validateInput(input));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    let formData = {
        name: "",
        surname: "",
        email: "",
        phone: 0,
        momName: "",
        dadName: "",
        age: 0,
        about: "",
        js: "",
        html: "",
        css: "",
        car: "",
    };

    inputs.forEach(input => {
        formData[input.id] = input.value;
    });

    console.log(formData);
    alert('Form submitted successfully!');
});
