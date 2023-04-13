/// <reference types="cypress" />  

describe('tarefas', () => {   //após criado o bloco de testes, posso ter varios ITS que são os casos de testes

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
            .type('Estudar Robot')  //get é para se obter um elemento web  # é um elemento que vc usa para identificar algo por ID

////button[contains(text(), "Create")]  // o Cypress não da suporte a Xpath 
        cy.contains('button', 'Create').click()  ////Porém é possível localizar um elemento com o contains.. vc identifica no elemento o tipo do elemente, e passa o seu texto
        
    })


})
