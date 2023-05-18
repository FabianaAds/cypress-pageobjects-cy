/// <reference types="cypress" />
 import produto from "../support/Pages/index";

 describe('Acessar a página LUMA e realizar a compra de um produto com sucesso', () => { 

    before(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        
    });
    
      it('Deve escolher um produto, adiciona-lo ao carrinho e abrir o carrinho.', () => {
        produto.comprar()
       
    });

    
    

 })