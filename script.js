//Botão adicionar ao carrinho 'produtos.html'
document.querySelectorAll('.botao-add-carrinho').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); 
        alert('Item adicionado ao carrinho com sucesso!');
    });
});

//Botão enviar do forms 'contato.html'
document.getElementById('enviarDados').addEventListener("click", (event) => {
    event.preventDefault();
    alert('WOOFF! WOOFF! Entraremos em contato');
    
    // Reseta o form
    const form = document.querySelector("form");
    form.reset();
});

