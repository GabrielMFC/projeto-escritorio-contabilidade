class CheckForm {
    constructor(inputs){
        this.inputs = inputs;
    }

    callSweetAlert(type, title, message) {
        Swal.fire({
            icon: type,
            title: title,
            text: message,
        });
    }

    validateInputs() {
        for(const input of this.inputs){
            if(input.value == "" || input.value == null){
                return false;
            }
        }
    }

    validateForm(){
        if(this.validateInputs() === false){
            this.callSweetAlert(
                "error",
                "Todos os campos devem ser preenchidos",
                "Todos os campos do formulário são obrigatórios. Por favor, preencha-os antes de enviar."
            );
            return;
        }
        
        this.callSweetAlert(
            "success",
            "Formulário enviado com sucesso",
            "Obrigado por entrar em contato conosco!"
        );
    }
}