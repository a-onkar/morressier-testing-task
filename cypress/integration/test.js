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
    
  });

 
});
