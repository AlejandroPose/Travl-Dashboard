describe('test login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    it('successfull login', () => {
        cy.get('input[name=name]').type('aldros');
        cy.get('input[name=password]').type('0000');
        cy.get('input[name=submit]').click();
        cy.url().should('include', '/dashboard');
    });
    it('failed login', () => {
        cy.get('input[name=name]').type('andras');
        cy.get('input[name=password]').type('0000');
        cy.get('input[name=submit]').click();
        cy.url().should('include', '/login');
        cy.get('p').should('contain', 'Error:').should('be.visible');
    });
    it('successfull logout', () => {
        cy.get('input[name=name]').type('aldros');
        cy.get('input[name=password]').type('0000');
        cy.get('input[name=submit]').click();
        cy.get('[data-testid=imageLogout]').click();
        cy.url().should('include', '/login');
    });
});