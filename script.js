//Botão adicionar ao carrinho 'produtos.html'
document.querySelectorAll('.botao-add-carrinho').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        // Exibe o modal de sucesso
        const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
        modal.show();
    });
});


//Botão enviar do forms 'contato.html'
document.getElementById('enviarDados').addEventListener("click", (event) => {
    event.preventDefault();

    // Campos de entrada
    const nome = document.querySelector('input[name="nome"]');
    const email = document.querySelector('input[name="email"]');
    const mensagem = document.querySelector('textarea[name="mensagem"]');

    // Onde vão as mensagens de erro
    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const mensagemError = document.getElementById('mensagemError');

    // Limpa as mensagens de erro anteriores
    nomeError.textContent = '';
    emailError.textContent = '';
    mensagemError.textContent = '';

    // Validação dos campos
    let isValid = true;

    if (nome.value === "") {
        nomeError.textContent = "Por favor, insira seu nome.";
        isValid = false;
    }

    if (email.value === "") {
        emailError.textContent = "Por favor, insira seu e-mail.";
        isValid = false;
    }

     // Validação de e-mail
     if (!email.value.includes('@') || !email.value.endsWith('.com')) {
        emailError.textContent = "Por favor, insira um e-mail válido.";
        isValid = false;
    }

    if (mensagem.value === "") {
        mensagemError.textContent = "Por favor, insira uma mensagem.";
        isValid = false;
    }

    // Se os campos estiverem todos preenchidos corretamente
    if (isValid) {
        // Exibe a mensagem de sucesso no modal
        const modalMessage = document.getElementById('sendModalMessage');
        const modalTitle = document.getElementById('sendModalLabel');
        modalTitle.textContent = "WOOF! WOOF!";
        modalMessage.textContent = "Entraremos em contato em breve!";

        // Exibe o modal de sucesso
        const successModal = new bootstrap.Modal(document.getElementById('sendModal'));
        successModal.show();

        // Reseta o formulário
        const form = document.querySelector("form");
        form.reset();
    }
});
