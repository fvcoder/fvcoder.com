describe('Componentes globales', () => {
  it('Navbar', () => {
    cy.viewport('iphone-xr')
    const page = cy.visit('http://localhost:3000');

    // Logo
    page.get('[aria-label="fvcoder logo"]').should('be.visible').click()
    cy.location('pathname').should('eq', '/')

    page.get('.nv-menu').should('be.visible')
    

    // desktop
    cy.viewport('macbook-13')
    cy.get('ul.nv-menu').should('be.visible')

    cy.get('li.nv-link-1 > a').should('be.visible').click()
    cy.location('pathname').should('eq', '/blog')
    cy.go(-1)

    cy.get('li.nv-link-2 > a').should('be.visible').click()
    cy.location('pathname').should('eq', '/about')
    cy.go(-1)
  })
})