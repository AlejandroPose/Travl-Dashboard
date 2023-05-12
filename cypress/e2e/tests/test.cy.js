describe('test login', () => {
    it('successfull login', () => {
        cy.visit('/login');
        cy.get('input[name=name]').type('aldros');
        cy.get('input[name=password]').type('0000');
        cy.get('input[name=submit]').click();
        cy.url().should('include', '/dashboard');
    });
    it('failed login', () => {
        cy.visit('/login');
        cy.get('input[name=name]').type('andras');
        cy.get('input[name=password]').type('0000');
        cy.get('input[name=submit]').click();
        cy.url().should('include', '/login');
        cy.get('p').should('contain', 'Error:').should('be.visible');
    });
});