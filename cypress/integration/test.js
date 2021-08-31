import EventLandingPage from '../pageObjects/event-landing.page';

describe('Regression Suite', () => {
  const eventLandingPageObj = new EventLandingPage();
  before(() => {
    cy.clearCookies();
  });

  let testdata;
  beforeEach(() => {
    // cy.viewport(1280, 720)
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC7: Verify Search feature', () => {
    cy.log('Visit event page');
    cy.visit('/');
    cy.log('Perform search action');
    cy.contains('11,710').should('be.visible');
    eventLandingPageObj.getSearchBox().clear().type(testdata.submission1);
    eventLandingPageObj.getSearchIcon().click();
    cy.log('Verify search result');
    eventLandingPageObj.checkSubmissionDisplayed(testdata.submission1);
  });

  it('TC8: Verify sorting filter option', () => {
    cy.log('Visit event page');
    cy.visit('/');
    cy.log('Click filter button');
    eventLandingPageObj.getFilterButton().click();
    cy.log('Selecting filtering factor from opened dialogue');
    eventLandingPageObj.selectFilteringOption('chemistry');
    cy.log('closing the dialogue');
    cy.get('body').click(0, 0);
    cy.contains('2,916').should('be.visible');
    cy.contains('Filters (1)').should('be.visible');
  });
});
