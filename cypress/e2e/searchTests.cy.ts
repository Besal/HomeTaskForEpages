import { searchResultsPage } from "../pages/searchResultspage";
import { searchPage } from "../pages/searchPage";
import { commonPage } from "../pages/commonPage";
import { productPage } from "../pages/productPage";

const validRequest = "Boat";
const invalidRequest = "qwerty123";
const specialCharachters = "@!/?%";
const requestWithProductsPriceRefernce = "jam";
const requestWithSale = "positive";

describe("Web Store Search Engine Tests", () => {
  beforeEach(() => {
    cy.visit("https://zwinger.pm.epages.com/");
    commonPage.acceptCoockies();
  });
  describe("Sorting of search results", () => {
    it("TC_001: Verify that the search returns relevant results for a basic query", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.searchButtonClick();
      searchResultsPage.searchResultsContainTextAndLinks(
        validRequest,
        validRequest
      );
    });

    it("TC_002: Verify that a search with no matching results shows an appropriate page.", () => {
      searchPage.enterSearchQuery(invalidRequest);
      searchPage.searchButtonClick();
      searchResultsPage.searchResultsEmptyStateExists();
    });

    it("TC_003: Verify that a search with special charachters shows an appropriate page.", () => {
      searchPage.enterSearchQuery(specialCharachters);
      searchPage.searchButtonClick();
      searchResultsPage.searchResultsEmptyStateExists();
    });

    it("TC_004: Verify that pressing enter with empty search shows appropriate placeholder.", () => {
      searchPage.pressEnterKeyOnEmptySearchInput();
      searchPage.emptyStateInputVisible();
    });

    it("TC_005: Verify that the search returns relevant results for a basic query by pressing 'Enter' key", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.pressEnterKeyOnFocusedSearchInput();
      searchResultsPage.searchResultsContainTextAndLinks(
        validRequest,
        validRequest
      );
    });

    it("TC_006: Verify that search tag equals search request", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.searchButtonClick();
      searchResultsPage.searchFilterTagContainsSearchRequest(validRequest);
    });

    it("TC_007: Verify that prodocts price reference exists", () => {
      searchPage.enterSearchQuery(requestWithProductsPriceRefernce);
      searchPage.searchButtonClick();
      searchResultsPage.productsPriceRefernceExists();
    });

    it("TC_008: Verify that sale label exists", () => {
      searchPage.enterSearchQuery(requestWithSale);
      searchPage.searchButtonClick();
      searchResultsPage.salesBadgeAndOldPriceIxists();
    });

    it("TC_009: Verify that stock options label exists", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.searchButtonClick();
      searchResultsPage.inStockOptionExists();
    });

    it("TC_0010: Verify search from empty state", () => {
      searchPage.enterSearchQuery(invalidRequest);
      searchPage.searchButtonClick();
      searchResultsPage.enterSearchQueryToEmptyState(validRequest);
      searchResultsPage.emptyStateSearchButtonClick();
      searchResultsPage.searchResultsContainTextAndLinks(
        validRequest,
        validRequest
      );
    });
  });

  describe("Sorting of search results", () => {
    it("TC_0011: Verify that the sorting by name Desc returns relevant results", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.searchButtonClick();
      searchResultsPage.sortingSelectByNameDescClick();
      searchResultsPage.searchResultsSortingDescFirstProductsTextExists(
        "Decor 3"
      );
    });
  });

  describe("Products page", () => {
    it("TC_0012: Verify that product card title has search request", () => {
      searchPage.enterSearchQuery(validRequest);
      searchPage.searchButtonClick();
      searchResultsPage.firstProductClick();
      productPage.titleContainsSearchRequest(validRequest);
    });
  });
});
