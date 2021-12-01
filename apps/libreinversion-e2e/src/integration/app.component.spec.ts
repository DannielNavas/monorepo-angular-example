describe('libreinversion', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('avvillas-root').should('exist');
  });
});