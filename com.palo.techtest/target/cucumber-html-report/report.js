$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("snapdeal.feature");
formatter.feature({
  "line": 2,
  "name": "AutoPaymentFeature",
  "description": "",
  "id": "autopaymentfeature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@snapdeal"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify that user should able to search product , apply filter and verify the details of the selected product - Using_Scenario Outline",
  "description": "",
  "id": "autopaymentfeature;verify-that-user-should-able-to-search-product-,-apply-filter-and-verify-the-details-of-the-selected-product---using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Using_ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user should able to enter \"Noise Cancellation headphone\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should verify the search landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should able select \"\u003cFacet1\u003e\", \"\u003cFacet2\u003e\",\"\u003cFacet3\u003e\",\"\u003cFacet4\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user should able to list down the product name, INR Price, Offer of the available brand \"\u003cFacet2\u003e\",\"\u003cFacet3\u003e\",\"\u003cFacet4\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should able to verify the brand name price and offer of the selected product \"\u003cFacet2\u003e\" or \"\u003cFacet3\u003e\" or \"\u003cFacet4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "autopaymentfeature;verify-that-user-should-able-to-search-product-,-apply-filter-and-verify-the-details-of-the-selected-product---using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "Facet1",
        "Facet2",
        "Facet3",
        "Facet4"
      ],
      "line": 32,
      "id": "autopaymentfeature;verify-that-user-should-able-to-search-product-,-apply-filter-and-verify-the-details-of-the-selected-product---using-scenario-outline;;1"
    },
    {
      "cells": [
        "20 - 30",
        "Sony",
        "JBL",
        "Marshall"
      ],
      "line": 33,
      "id": "autopaymentfeature;verify-that-user-should-able-to-search-product-,-apply-filter-and-verify-the-details-of-the-selected-product---using-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 73424435089,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify that user should able to search product , apply filter and verify the details of the selected product - Using_Scenario Outline",
  "description": "",
  "id": "autopaymentfeature;verify-that-user-should-able-to-search-product-,-apply-filter-and-verify-the-details-of-the-selected-product---using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@snapdeal"
    },
    {
      "line": 21,
      "name": "@Using_ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user should able to enter \"Noise Cancellation headphone\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should verify the search landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should able select \"20 - 30\", \"Sony\",\"JBL\",\"Marshall\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user should able to list down the product name, INR Price, Offer of the available brand \"Sony\",\"JBL\",\"Marshall\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should able to verify the brand name price and offer of the selected product \"Sony\" or \"JBL\" or \"Marshall\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Noise Cancellation headphone",
      "offset": 27
    }
  ],
  "location": "SearchProduct.user_should_able_to_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 3401133524,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.user_click_on_search_button()"
});
formatter.result({
  "duration": 84388188722,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct.user_should_verify_the_search_landing_page()"
});
formatter.result({
  "duration": 1037056665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20 - 30",
      "offset": 25
    },
    {
      "val": "Sony",
      "offset": 36
    },
    {
      "val": "JBL",
      "offset": 43
    },
    {
      "val": "Marshall",
      "offset": 49
    }
  ],
  "location": "SearchProduct.user_should_able_select(String,String,String,String)"
});
formatter.result({
  "duration": 22354977099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony",
      "offset": 89
    },
    {
      "val": "JBL",
      "offset": 96
    },
    {
      "val": "Marshall",
      "offset": 102
    }
  ],
  "location": "SearchProduct.user_should_able_to_list_down_the_product_name_INR_Price_Offer_of_the_available_brand(String,String,String)"
});
formatter.result({
  "duration": 10412449138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony",
      "offset": 83
    },
    {
      "val": "JBL",
      "offset": 93
    },
    {
      "val": "Marshall",
      "offset": 102
    }
  ],
  "location": "SearchProduct.user_should_able_to_verify_the_brand_name_price_and_offer_of_the_selected_product_or_or(String,String,String)"
});
formatter.result({
  "duration": 10750169155,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 14733770633,
  "status": "passed"
});
formatter.after({
  "duration": 170553,
  "status": "passed"
});
});