const btnValidacao = document.getElementById('btn-validacao');
const inputs = document.querySelectorAll('.input');

const checkForm = new CheckForm(inputs);

btnValidacao.addEventListener('click', (event) => {
    event.preventDefault();

    checkForm.validateForm();
})