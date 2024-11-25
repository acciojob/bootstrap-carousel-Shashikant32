//your code here
describe('Carousel tests', () => {
  it('Should work when the next icon is pressed', () => {
    // Click the "next" button
    cy.get('.carousel-control-next').click();
    // Verify that the fourth slide becomes active
    cy.get('.carousel-item.active').should('have.class', 'fourth-slide');
  });

  it('Should render next or previous icon', () => {
    // Check that the left (previous) and right (next) controls exist and have the correct classes
    cy.get('.carousel-control-prev').should('have.class', 'carousel-control-prev');
    cy.get('.carousel-control-next').should('have.class', 'carousel-control-next');
  });

  it('Should work when the previous icon is pressed', () => {
    // Click the "previous" button
    cy.get('.carousel-control-prev').click();
    // Verify that the second slide becomes active
    cy.get('.carousel-item.active').should('have.class', 'second-slide');
  });
});
