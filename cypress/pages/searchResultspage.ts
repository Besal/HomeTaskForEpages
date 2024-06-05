class SearcResultshPage {
  private searchResultItemText =
    'div[class="product-item"] h2[itemprop="name"]';

  private searchResultItemLink = 'a[class="product-item-link"]';

  private emptyStateHeader = 'div[class="content"] h1';

  private searchFieldWithNoResults =
    'div[class="search-no-result"] form[class="search-form"]';

  private emptyStateSearchButton =
    'div[class="search-no-result-form"] button[class="search-form-icon search-form-submit"]';

  private sortingSelect = 'div[class="sorting-select"] select';

  private productListGridFirstItem =
    'div[class="product-list grid-col-m"] div[class="product-item"]:first-child';

  private searchFilterTag = 'button[class="search-filter-tag"]';

  private priceReference = 'span[class="product-item-price-reference"]';

  private salesBadge = 'div[class="product-item-price-old-percentage"]';

  private oldPrice = 'h3[class="product-item-price-old"]';

  private stockLabel = 'span[class="product-item-availability-info"]';

  searchResultsContainTextAndLinks(text: string, linkText: string) {
    cy.get(this.searchResultItemText).contains(text);
    cy.get(this.searchResultItemLink).contains(linkText);
  }

  searchFilterTagContainsSearchRequest(searchRequest: string) {
    cy.get(this.searchFilterTag).should("be.visible").contains(searchRequest);
  }

  searchResultsEmptyStateExists() {
    cy.get(this.emptyStateHeader).should("be.visible");
    cy.get(this.searchFieldWithNoResults).should("be.visible");
  }

  sortingSelectByNameDescClick() {
    cy.get(this.sortingSelect)
      .should("be.visible")
      .select("Name (Z-A)")
      .should("have.value", "name-desc");
  }

  enterSearchQueryToEmptyState(query: string) {
    cy.get(this.searchFieldWithNoResults).should("be.visible").type(query);
  }

  productsPriceRefernceExists() {
    cy.get(this.priceReference).should("be.visible");
  }

  searchResultsSortingDescFirstProductsTextExists(text: string) {
    cy.get(this.productListGridFirstItem).should("be.visible").contains(text);
  }

  salesBadgeAndOldPriceIxists() {
    cy.get(this.salesBadge).should("be.visible");
    cy.get(this.oldPrice).should("be.visible");
  }

  inStockOptionExists() {
    cy.get(this.stockLabel).should("be.visible");
  }

  firstProductClick() {
    cy.get(this.productListGridFirstItem).should("be.visible").click();
  }

  emptyStateSearchButtonClick() {
    cy.get(this.emptyStateSearchButton).should("be.visible").click();
  }
}

export const searchResultsPage = new SearcResultshPage();
