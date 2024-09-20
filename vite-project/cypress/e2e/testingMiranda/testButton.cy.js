
describe("ADD button show increment number in text", ()=> {
    beforeEach(() => {
        cy.visit("http://localhost:5173/")

    })
    it("Click in button update text",() => {
        cy.get('[data-cy="countButton"]').click()
        cy.contains('count is 1').should('exist')
    })

    it(" button  text works",() => {
        cy.contains('count is 0').should('exist')
    })
})