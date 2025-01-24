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
    
    // Exibe o modal de sucesso
    const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
    modal.show();
    
    // Reseta o form
    const form = document.querySelector("form");
    form.reset();
});

