describe('frosted-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('frosted-ui-nx-welcome').should('exist');
  });
});
