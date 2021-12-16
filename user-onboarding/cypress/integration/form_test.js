

describe('Users App', () =>{
beforeEach(() => {
cy.visit(`http://localhost:3000/`)
    })
const name = cy.get('input [name]=Name')
const email = cy.get('input [name]=Email')
const password = cy.get('input [name]=Password')

it('works', () => {
    name().should('exist')
    email().should('exist')
    password().should('exist')
})
})
