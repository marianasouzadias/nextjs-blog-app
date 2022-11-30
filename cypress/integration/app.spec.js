describe('Navigation', () => {
    it('should navigate to the posts page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
  
      // Find a link with an href attribute containing "post_id=1" and click it
      cy.get('a[href*="post_id=1"]').click()
  
      // The new page should contain an h1 with "Eliseo@gardner.biz"
      cy.get('p').contains('Eliseo@gardner.biz')
    })
  })