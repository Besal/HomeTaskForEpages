# Test Cases

## Test Case ID TC_001

- **Test Case ID:** TC_001
- **Title:** Verify that the search returns relevant results for a basic query.
- **Steps:**
  - Enter a common product name "Boat" in the search bar.
  - Click the search icon.
- **Expected Result:** A list of relevant products containing the keyword "Boat" should be displayed.

## Test Case ID TC_002

- **Test Case ID:** TC_002
- **Title:** Verify that a search with no matching results shows an appropriate page.
- **Steps:**
  - Enter a random string "qwerty123" in the search bar.
  - Click the search icon.
- **Expected Result:** A message such as "No results found" should be displayed.

## Test Case ID TC_003

- **Test Case ID:** TC_003
- **Title:** Verify that the search handles special characters appropriately.
- **Steps:**
  - Enter a string with special characters "@!/?%" in the search bar.
  - Click the search icon.
- **Expected Result:** A message such as "No results found" should be displayed.

## Test Case ID TC_004

- **Test Case ID:** TC_004
- **Title:** Verify that pressing enter with empty search shows appropriate placeholder.
- **Steps:**
  - Press Enter in the search bar.
- **Expected Result:** Placeholder contains "Type here..."

## Test Case ID TC_005

- **Test Case ID:** TC_005
- **Title:** Verify that the search returns relevant results for a basic query by pressing 'Enter' key"
- **Steps:**
  - Enter a common product name "Boat" in the search bar.
  - Press Enter in the search bar.
- **Expected Result:** A list of relevant products containing the keyword "Boat" should be displayed.

## Test Case ID TC_006

- **Test Case ID:** TC_006
- **Title:** Verify that search tag equals search request.
- **Steps:**
  - Enter a common product name "Boat" in the search bar.
  - Click the search icon.
- **Expected Result:** Search tag equals search request.

## Test Case ID TC_007

- **Test Case ID:** TC_007
- **Title:** Verify that prodocts price reference exists.
- **Steps:**
  - Enter a product keyword "jam" in the search bar.
  - Click the search icon.
- **Expected Result:** Product's price per unit weight exists.

## Test Case ID TC_008

- **Test Case ID:** TC_008
- **Title:** Verify sale label and old price.
- **Steps:**
  - Enter a product keyword "positive" in the search bar.
  - Click the search icon.
- **Expected Result:** Sales badge and old price exist.

## Test Case ID TC_009

- **Test Case ID:** TC_009
- **Title:** Verify that stock options label exists.
- **Steps:**
  - Enter a product keyword "Boat" in the search bar.
  - Click the search icon.
- **Expected Result:** Stock options label below card exists. 

## Test Case ID TC_010

- **Test Case ID:** TC_010
- **Title:** Verify search from empty state.
- **Steps:**
  - Enter a product keyword "qwerty123" in the search bar.
  - Click the search icon.
  - Enter a product keyword "Boat" in the search bar.
  - Click the search icon.
**Expected Result:** A list of relevant products containing the keyword "Boat" should be displayed.

## Test Case ID TC_011

- **Test Case ID:** TC_011
- **Title:** Verify that the sorting by name Desc returns relevant results.
- **Steps:**
  - Enter a common product name "Boat" in the search bar.
  - Click the search icon.
  - Click on sorting select.
  - Click on "Name (Z-A)".
**Expected Result:**  A list of relevant products contains as first product the keyword "Decor 3".


## Test Case ID TC_012

- **Title:** Verify that product card title has search request.
- **Steps:**
  - Enter a product keyword "Boat" in the search bar.
  - Click the search icon.
  - Click the first product.
- **Expected Result:** The product card title includes the search query.

# Bug Reports

- **Title:** Search Results Do Not Contain Search Query Term
- **Environment:** Prod
- **Version:** 1.234

**Description:**
When performing a search using the term "test" in the search bar, most of the search results returned do not contain the word "test" anywhere in the displayed products.

**Steps to Reproduce:**
1. Navigate to the web store.
2. Enter "test" into the search bar.
3. Press Enter or click the search icon.

**Actual Result:**
The search results page displays that most of the products do not contain the word "test" in their titles, descriptions, or any other visible information.

**Expected Result:**
The search results should display products containing the search term "test" in their titles, descriptions, or relevant metadata.
