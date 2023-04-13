/// <reference types="cypress" />  

describe('tarefas', () => { 

    it('deve cadastrar uam nova tarefa', () => {

        cy.request({ //consumindo a API Rest // O request vem antes, justamente para limpar o ambiente, caso tenha essa mesma tarefa já cadastrada
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {name: 'Estudar Robot'}

        }).then(response => {
            expect(response.status).to.eq(204)
        })   //usado para pegar o resultado de retorno

        cy.visit('http://localhost:8080')
        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudar Robot') 

        cy.contains('button', 'Create').click()  
    })


})
