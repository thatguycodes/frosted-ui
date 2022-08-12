describe('frosted-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('frosted-ui-root').should('exist');
  });
});
