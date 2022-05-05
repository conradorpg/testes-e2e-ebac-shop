/// <reference types="cypress" />
import EndToEndPage from '../support/page_objects/cadastro.page'
const configProduto = require('../fixtures/produto.json')
const dadosCadastro = require('../fixtures/cadastro.json')

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
    })

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let produto = configProduto[0].produto
        let cor = configProduto[0].cor
        let tamanho = configProduto[0].tamanho
        let quantidade = configProduto[0].quantidade

        cy.addProduct(produto, cor, tamanho, quantidade)
        // configProduto[0].produto,
        // configProduto[0].cor,
        // configProduto[0].tamanho,
        // configProduto[0].quantidade,

        EndToEndPage.Cadastro(
            dadosCadastro[0].firstName,
            dadosCadastro[0].lastName,
            dadosCadastro[0].jobTitle,
            dadosCadastro[0].email
        )

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
    })

});