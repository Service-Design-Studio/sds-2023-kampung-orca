import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Given("the forum box is open", () => {
  cy.visitRoute("lesson view");
  cy.clickButton("forum");
});

Then("I should see the New Post inputs", () => {
  cy.get('button').contains('Post').should('exist');
});

Given("a post with the following details:", (datatable) => {
  datatable.hashes().forEach((element) => {
  cy.contains("Curious about Christianity").click();
  });

  });

Given("a comment with the following details:", (datatable) => {
    datatable.hashes().forEach((element) => {
    cy.contains("I want to know more!")
    cy.contains("Go Back").click()
    });
    });

Given("I am on the forum home page", () => {
  cy.get('[data-cy="forum-close-button"]').should('exist');
})

When("I create a post with the following details:", (datatable) => {
  cy.contains("Create New Post").click();
  datatable.hashes().forEach((element) => {
  cy.get('[data-cy="post-title-input"]').type(element.Title);
  cy.get('[data-cy="post-content-input"]').type(element.Content);
  cy.get('[data-cy="post-button"]').click()
  // cy.get(“#email”).clear();

  // cy.get(“#email”).type(element.email);

  // cy.get(“#passwd”).clear();

  // cy.get(“#passwd”).type(element.validpassword);
  });
  });

  Then("I should see the post on the forum home page",()=>{
    cy.contains("Internalised Racism").should('exist');
  })

  When("I try to create a post with the following details:", (datatable) => {
    cy.contains("Create New Post").click();
    });

  Then("the Post button should be disabled", ()=>{
    cy.get('[data-cy="post-button"]').isDisabled
    });

  When("I click on the post titled {}", (postTitle)=>{
    cy.contains(postTitle).click();
  });

  Then("I should see the forum post page", ()=>{
    cy.contains("Go Back").should('exist');
  });
  Given("I am on the forum post page", ()=>{
    cy.contains('by Thomas').click();
    cy.contains("Go Back").should('exist');
  });

  Then("I should see no comments",()=>{
    cy.get('[data-cy="comment"]').should('not.exist');
  });

  Then("I should see the interface to create a new comment",()=>{
    cy.get('[data-cy="post-comment-button"]').should('exist');
  });

  Then("I have created a post", ()=>{
    cy.contains('by Thomas').click();
  });

  When("I edit my post with the following details:", (datatable) => {
    cy.get('[data-cy="edit-post-button"]').eq(0).click();
    datatable.hashes().forEach((element) => {
    cy.get('[data-cy="edit-content-text-area"]').clear({force: true});
    cy.get('[data-cy="edit-content-text-area"]').eq(0).type(element.Content);
    });
    cy.get('[data-cy="confirm-edit-post"]').click();
    });

  When("I try to edit my post with the following details:",()=>{
    cy.get('[data-cy="edit-content-text-area"]').clear({force: true});
  });

  Then("I am editing my post",()=>{
    cy.get('[data-cy="edit-post-button"]').eq(0).click();
  })
    Then("the content should be updated on the forum post page",()=>{
      cy.contains("Does internalised racism really exist?").should('exist');
    });

  Then( "the confirm edit post button should be disabled", ()=>{
    cy.get('[data-cy="confirm-edit-post"]').isDisabled
  })

  When( "I click the post Delete button",()=>{
    cy.get('[data-cy="post-delete-button"]').eq(0).click();
  })
  Then("I should see a confirmation message to confirm if I wish to delete",()=>{
    cy.get('[data-cy="confirm-delete-button"]').should('exist');
  });
  When("I click on the button titled Delete",()=>{
    cy.get('[data-cy="confirm-delete-button"]').click();
  });
  When("I click on the button titled Cancel",()=>{
    cy.get('[data-cy="cancel-delete-button"]').click();
  });

  Then( "I should see a success message confirming the post deletion",()=>{
    // TODO: think about how to test
  });
  Then( "I should not see the post on the forum home page",()=>{
    // TODO: think about how to test
  });

  When( "I try to create a comment with the following details:",(datatable)=>{
  })
  When( "I create a comment with the following details:",(datatable)=>{
    datatable.hashes().forEach((element) => {
      cy.get('[data-cy="comment-text-area"]').type(element.Content);
    });
    cy.get('[data-cy="post-comment-button"]').click();
  })
  Then ("the Comment button should be disabled",()=>{
    cy.get('[data-cy="post-comment-button"]').isDisabled;
  })
  Then("I should see a success message confirming the comment creation",()=>{
  });
  Then("I should see the comment on the forum post page",()=>{
    cy.contains("Well said!").should('exist');
  });
  Then("I have created a comment",()=>{
    cy.contains("Thomas").should('exist');
  })
  When("I edit my comment with the following details:",(dataTable)=>{
    cy.get('[data-cy="edit-post-button"]').eq(1).click();
    dataTable.hashes().forEach((element) => {
      cy.get('[data-cy="edit-content-text-area"]').eq(1).clear({force: true});
      cy.get('[data-cy="edit-content-text-area"]').eq(1).type(element.Content);
    });

  })
  Then("I should see a success message confirming the comment edit",()=>{});
  Then("I should see the new comment on the forum post page",()=>{
    cy.contains("I disagree.").should('exist');
  })

  When("I click the button titled Delete next to my comment",()=>{
    cy.get('[data-cy="post-delete-button"]').eq(1).click();
  });
  Then("I should see a confirmation to delete the comment",()=>{
    cy.get('[data-cy="confirm-delete-button"]').should('exist');
  });
  Then("I should see a success message confirming the comment deletion",()=>{
  });
  Then("I should see the post without my comment",()=>{
    cy.contains("I disagree.").should('not.exist');
  })

When("I click on a post titled {}",(postTitle)=>{
  cy.contains(postTitle).click();
});
Then ("I should see the corresponding forum post page",()=>{
  cy.contains('Hello People 1').should('exist');
});
Then ("I should see the comment saying yoyo",()=>{
  cy.contains('yoyo').should('exist');
});

Then("I should not see the {} Edit and Delete buttons",()=>{
  cy.get('[data-cy="post-delete-button"]').should('not.exist');
  cy.get('[data-cy="edit-post-button"]').should('not.exist');
});

When("I edit my comment and clear the original content",()=>{
  cy.get('[data-cy="edit-post-button"]').eq(1).click();
  cy.get('[data-cy="edit-content-text-area"]').eq(1).clear({force: true});
});

Then("the confirm edit comment button should be disabled", ()=>{
  cy.get('button[aria-label="Submit"]').should('have.attr', 'disabled');
});
