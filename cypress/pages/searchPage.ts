class SearchPage {
  private searchInput = 'input[class="search-form-field"]';
  private searchButton = 'button[class="search-form-icon search-form-submit"]';
  private placeholderForEmptyState = 'input[placeholder="Type here..."]';
  private searchInputFocused = 'input[class="search-form-field focus-visible"]';

  enterSearchQuery(query: string) {
    cy.get(this.searchInput).should("be.visible").clear().type(query);
  }

  pressEnterKeyOnEmptySearchInput() {
    cy.get(this.searchInput).should("be.visible").type("{enter}");
  }

  pressEnterKeyOnFocusedSearchInput() {
    cy.get(this.searchInputFocused).should("be.visible").type("{enter}");
  }

  searchButtonClick() {
    cy.get(this.searchButton).click();
  }

  emptyStateInputVisible() {
    cy.get(this.placeholderForEmptyState).should("be.visible");
  }
}

export const searchPage = new SearchPage();
