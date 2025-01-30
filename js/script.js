//Botão adicionar ao carrinho 'produtos.html'
document.querySelectorAll('.botao-add-carrinho').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        // Exibe o modal de sucesso
        const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
        modal.show();
    });
});




// Página ativa
// document.addEventListener("DOMContentLoaded", function () {
//     let links = document.querySelectorAll(".nav-link"); 
//     let currentPage = window.location.pathname.split("/").pop().split("#")[0]; 

//     links.forEach(link => {
//         let linkPage = link.getAttribute("href").split("/").pop().split("#")[0]; 

//         if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
//             link.classList.add("active"); 
//         }
//     });
// });
