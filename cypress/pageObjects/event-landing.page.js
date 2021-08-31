class EventLandingPage {
  constructor() {
    this.pageTitle = 'ACS Spring 2020 National Meeting & Expo | Morressier';
  }

  verifyPageTitle() {
    cy.title().should('eq', this.pageTitle);
  }

  getSignupMenuButton() {
    return cy.findByText('Signup').should('be.visible');
  }

  getLoginButton() {
    return cy.findByText('Login').should('be.visible');
  }

  getSearchBox() {
    cy.get('input[placeholder="Search"]').eq(1).should('be.visible');
  }

  getSearchIcon() {
    cy.get('input[placeholder="Search"]').eq(1).next('svg').should('be.visible');
  }
  
}

export default EventLandingPage;
