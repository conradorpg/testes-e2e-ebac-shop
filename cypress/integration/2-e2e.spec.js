/// <reference types="cypress" />
import EndToEnd from '../support/page_objects/2e2.page' 

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        EndToEnd.realizarCompraCompleta()
        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
    });


})