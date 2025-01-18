
document.querySelectorAll('.botao-add-carrinho').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); 
        alert('Item adicionado ao carrinho com sucesso!');
    });
});
