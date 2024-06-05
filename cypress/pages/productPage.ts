class ProductPage {
  private productsPageInfoTitle = 'h1[class="product-info-title"]';

  titleContainsSearchRequest(searchRequest: string) {
    cy.get(this.productsPageInfoTitle)
      .should("be.visible")
      .contains(searchRequest);
  }
}

export const productPage = new ProductPage();
