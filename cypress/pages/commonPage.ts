class CommonPage {
  private acceptCookiesButton = 'button[class="cc-dialog-button-accept"]';

  acceptCoockies() {
    cy.get(this.acceptCookiesButton).click();
  }
}

export const commonPage = new CommonPage();
