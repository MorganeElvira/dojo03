describe('Use drag and drop in playplay website', () => {
    it('', () => {
        cy.visit('https://staging.playplay.com/fr')
        // accept cookies
        cy.get('#axeptio_btn_acceptAll').click()
        // Connexion
        cy.get('#log_in_link').click()
        cy.get('#email').type('nightwatch.playplay@gmail.com')
        cy.get('#password').type('hctawthgin')
        cy.get('[data-cy="authForm_submit_button"]').click()
        cy.get('.pp__start-from-scratch-card').click()
        cy.wait(5000)
        cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click()
        cy.get(':nth-child(1) > .pp__add-a-new-screen-screens-list__category-screens > :nth-child(1) > .pp__add-a-new-screen-catalog-item > .pp__add-a-new-screen-catalog-item__cover').click()
        cy.get('.upload-container').click()
        cy.get('[data-cy="library_corporates_tab"]').click()
        cy.get('[data-cy="award.svg"] > .media-image-item')
            .drag('.upload-container', {force: true})
            .then((success) => {
                assert.isTrue(success)
            })
        cy.wait(5000)
        cy.get('[data-cy="mediaEditionModal_save_button"]').click()
        cy.get('.ql-editor > p').type('Hello World!')
        cy.get('.ds__button-action__content-wrapper').click()
        cy.get('[data-cy="globalPreview_generate_button"]').click()
        cy.wait(10000)
        cy.get('[data-cy="projectView_approvalProcessGetApproval_button"]').click()
        cy.get('[data-cy="modal_confirm_button"]').click()

    })
})