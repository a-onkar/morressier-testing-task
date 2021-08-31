import EventLandingPage from '../pageObjects/event-landing.page';

describe('Regression Suite', () => {
  const eventLandingPageObj = new EventLandingPage();
  before(() => {
    cy.clearCookies();
  });

  let testdata;
  beforeEach(() => {
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC 7', () => {
    cy.log('Visit event page');
    cy.visit('/');
    cy.log('Perform search action');
    cy.contains('11,710').should('be.visible');
    eventLandingPageObj.getSearchBox().clear().type(testdata.submission1);
    eventLandingPageObj.getSearchIcon().click();
    cy.log('Verify search result');
    eventLandingPageObj.checkSubmissionDisplayed(testdata.submission1);
  });
});
