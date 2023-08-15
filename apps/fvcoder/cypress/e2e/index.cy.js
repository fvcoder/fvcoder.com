describe('Index/Home Page', () => {
    it('renders', () => {
        cy.visit('http://localhost:3000');
        
        cy.get('.home-btn-gh').each((item) => {
            cy.request(item.prop('href')).its('status').should('eq', 200)
        })

    })
})