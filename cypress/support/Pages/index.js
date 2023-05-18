/// <reference types="cypress" />
import {PRODUTO} from './elements'

class produto {

  comprar(){

    cy.get(PRODUTO.feminino).click()
    cy.get(PRODUTO.tops).click()
    cy.get(PRODUTO.jaquetas).click()
    cy.get(PRODUTO.preco).click()
    cy.get(PRODUTO.Tamanho).click()
    cy.get(PRODUTO.corrosa).click()
    cy.get(PRODUTO.adicionar).click({ multiple: true })

  }





}
export default new produto();