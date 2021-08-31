class EventLandingPage {
  constructor() {
    this.pageTitle = 'ACS Spring 2020 National Meeting & Expo | Morressier';
    this.itemInGrid =
      '.PosterGrid__StyledPosterGridContainer-jugd3x-0 > div > div > div:nth-child(2) > a > div > span';
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
    return cy.get('input[placeholder="Search"]').eq(1).should('be.visible');
  }

  getSearchIcon() {
    return cy
      .get('input[placeholder="Search"]')
      .eq(1)
      .next('svg')
      .should('be.visible');
  }

  checkSubmissionDisplayed(name) {
    cy.get(this.itemInGrid).each(($list, index) => {
      const item = $list.text();
      expect(item).to.be.equal(name);
    });
  }
}

export default EventLandingPage;
