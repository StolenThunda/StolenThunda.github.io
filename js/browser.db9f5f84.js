(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "1926":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/browse/CurrentSearch.vue?vue&type=template&id=001fa2f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.searching)?_c('q-toolbar',{staticClass:"flex flex-center text-white"},[_vm._v("\n  Filters:\n  "),_vm._l((_vm.activeFilters),function(val,key){return _c('span',{key:key + _vm.componentKey},[(val.length > 1)?_c('span',[_c('q-btn',{attrs:{"rounded":"","color":"secondary","label":_vm.entitle(key)}},[_c('q-badge',{staticClass:"shadow-5",attrs:{"floating":"","transparent":"","color":"accent"}},[_vm._v("\n          "+_vm._s(val.length)+"\n        ")]),_c('q-menu',{attrs:{"transition-show":"rotate","transition-hide":"rotate","anchor":"bottom middle","self":"top middle","fit":""}},[_c('q-list',{staticStyle:{"min-width":"100px"}},_vm._l((val),function(chip){return _c('q-item',{key:chip.sync + _vm.componentKey},[_c('q-chip',{attrs:{"removable":"","outline":""},on:{"remove":function($event){return _vm.deleteFilter(chip)}}},[_vm._v("\n                "+_vm._s(chip.text)+"\n              ")])],1)}),1)],1)],1)],1):_c('span',{staticClass:"text-capitalize",attrs:{"set":(_vm.chip = val[0])}},[_c('q-chip',{attrs:{"color":"secondary","removable":""},on:{"remove":function($event){return _vm.deleteFilter(_vm.chip)}}},[_vm._v("\n        "+_vm._s(_vm.chip.text)+"\n        "),_c('q-badge',{staticClass:"shadow-5",attrs:{"align":"top","color":"accent","transparent":"","floating":""}},[_vm._v(_vm._s(_vm.entitle(key)))])],1)],1)])})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/browse/CurrentSearch.vue?vue&type=template&id=001fa2f8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/morph.js
var morph = __webpack_require__("709d");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__("7937");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/middleware/ProPlayerBrowser.js

function ProPlayerBrowser(strWrapperDiv) {
  this.b_BrowserLoaded = false;
  this.strBrowserWrapperID = "#" + strWrapperDiv;
  this.strActiveChannel = "";
  this.n_DependentsToProcess = 0;
  this.n_UpdateTimer = -1;
  this.filterSectionList = new BrowserFilterSectionList(this);
  this.b_IsProcessing = false;

  this.initializeBrowser = function () {};
  /*****************************************
   *** Initialization/Reset Functions  ********
   *****************************************/


  this.openBrowser = function () {};

  this.closeBrowser = function () {
    //console.log('Close Browser Called');
    $(this.strBrowserWrapperID).empty();
    $(this.strBrowserWrapperID).toggle(false);
  };

  this.browserReset = function () {
    $("#filter-level-1 .selected").toggleClass("active", false);
    this.strActiveChannel = "";
    this.browserResetFilters();
    this.resetResults();
    this.n_DependentsToProcess = 0;
    this.filterSectionList.reset();
    this.spinner("results");
    $("#results").load(gc_BranchPath + "/--ajax-browser-default-entries/", function () {
      thePlayer.browserTool.loadResultsFavoritesForms();
    });
    $("#sidebar-instructions").toggleClass("hidden", false);
  };

  this.resetResults = function () {
    $("#results .row").remove();
    $("#results").empty();
  };
  /*****************************************
   *************  Interface Callbacks  ************
   *****************************************/


  this.browserChannelCallback = function (strChannel, sender) {
    if (this.isProcessing()) {
      //console.log("Previous process has not finished, bailing.");
      return;
    }

    this.initializeProcessing();
    this.strActiveChannel = strChannel;
    this.resetResults(); //unselect previously selected content type.

    $("ul.browser-top-filter-list li a.active").toggleClass("active", false);

    if (sender) {
      $(sender).toggleClass("active", true);
    }

    this.browserLoadFilters(strChannel);
  };

  this.toggleSearchFilter = function (strFilterID, strSectionID) {
    if (this.isProcessing()) {
      //console.log("Previous process has not finished, bailing.");
      return;
    }

    this.initializeProcessing();
    let theFilterID = "input#" + strFilterID;
    let theSection = $("#browserFilterSection-" + strSectionID); //console.log(theSection);

    let bEnableStacking = $(theSection).data("section-stackable") == "yes";
    let sectionType = $(theSection).data("section-type");
    let bWasChecked = $(theFilterID).prop("checked");

    if (bWasChecked == undefined) {
      bWasChecked = false;
    }

    if (bWasChecked && !bEnableStacking) {
      //We are toggling on a checkbox, but stacking is not enabled for this section.
      // We must clear all other checked inputs in this group.
      let theCheckboxes = $(theSection).find("input:checkbox");

      for (let i = 0; i < theCheckboxes.length; i++) {
        if ($(theCheckboxes[i]).attr("id") !== strFilterID) {
          //console.log('Unchecking: ' + $(theCheckboxes[i]).attr('id'));
          $(theCheckboxes[i]).prop("checked", false);
        }
      }
    }

    let filterSectionID = "#filterSection-" + strSectionID;
    let theCheckboxes = $(theSection).find("input:checkbox:checked");

    if (theCheckboxes.length > 0) {
      //console.log("Marking section to have filters on: " + filterSectionID);
      $(filterSectionID).toggleClass("has-filters", true);
    } else {
      $(filterSectionID).toggleClass("has-filters", false);
    }

    this.resetResults();
    this.showResultsLoading();
    this.processDependents(strSectionID);
    this.waitForDependentsToFinishUpdating();
  };
  /*****************************************
   *************   Filtering  ************
   *****************************************/


  this.browserResetFilters = function () {
    $("#sidebarFiltersWrapper form").remove();
  };

  this.browserLoadFilters = function (strChannel) {
    this.browserResetFilters();
    this.spinner("sidebarFiltersWrapper");
    var theURL = gc_BranchPath + "/--ajax-browser-filters/" + strChannel;
    $("#sidebarFiltersWrapper").load(theURL, function () {
      if (strChannel != "youtube") {
        thePlayer.browserTool.submitSearch();
        $("#filterAccordion").foundation();
        thePlayer.browserTool.refreshActiveFilters();
        thePlayer.browserTool.buildFilterSectionData();
      } else {
        thePlayer.browserTool.clearActiveFilters();
        thePlayer.browserTool.finalCleanup();
      }
    });
  };

  this.removeKeywordFilter = function () {
    $("#browserSearchKeywordsReset").toggle(false);
    $("input#browserSearchKeywords").val("");
    this.applyKeywordFilter();
  };

  this.removeActiveFilter = function (strFilterID, strSectionID) {
    //first uncheck the filter because that's what would have happened if we clicked
    // on it.
    $("#" + strFilterID).prop("checked", false);
    this.toggleSearchFilter(strFilterID, strSectionID);
  };

  this.clearActiveFilters = function () {
    $("#activeFiltersWrapper").html("");
    $("#activeFiltersWrapper").toggleClass("hidden", true);
  };

  this.refreshActiveFilters = function () {
    //console.log("Refreshing Active Filters");
    let filtersString = "";
    let sections = $("ul#filterAccordion li.accordion-item");

    for (let i = 0; i < sections.length; i++) {
      let sectionTitle = $(sections[i]).children("a.accordion-title").first().text();
      let sectionID = $(sections[i]).data("section-id");
      let checkedFilters = $(sections[i]).find("input:checkbox:checked");

      if (checkedFilters.length > 0) {
        filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
        filtersString += sectionTitle + ":</span> ";

        for (let j = 0; j < checkedFilters.length; j++) {
          filtersString += "<a class='active-filter-item' onClick='thePlayer.browserTool.removeActiveFilter(\"";
          filtersString += $(checkedFilters[j]).attr("id");
          filtersString += '", ';
          filtersString += '"' + sectionID + "\"); return false;'>";
          filtersString += $(checkedFilters[j]).siblings("label").first().text();
          filtersString += " <i class='fa fa-times-circle'></i></a>";
        }

        filtersString += "</span>";
      }
    }

    let strKeywords = $("input#browserSearchKeywords").val();

    if (strKeywords != "") {
      filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
      filtersString += "Keywords:</span> ";
      filtersString += "<a class='active-filter-item' onClick='thePlayer.browserTool.removeKeywordFilter(); return false;'>";
      filtersString += strKeywords;
      filtersString += " <i class='fa fa-times-circle'></i></a>";
      filtersString += "</span>";
    }

    if (filtersString == "") {
      filtersString += "<span class='active-filter-group'><span class='active-filter-group-title'>";
      filtersString += "Showing: All</span>";
      filtersString += "</span>";
    }

    $("#activeFiltersWrapper").removeClass("hidden");
    $("#activeFiltersWrapper").html(filtersString);
  };
  /*****************************************
   *************  Search Results   ************
   *****************************************/


  this.resetSearch = function () {
    $("input:checkbox").prop("checked", false);
    $(".has-filters").removeClass("has-filters");
    this.refreshActiveFilters();
    this.submitSearch();
  };

  this.submitSearch = function () {
    var theForm = $("form#searchForm");
    formData = $(theForm).serialize(); //console.log(formData);

    $.ajax({
      type: "POST",
      url: $(theForm).attr("action"),
      data: formData
    }).done(function (response) {
      $("#results").html(response);
      thePlayer.browserTool.finalCleanup();
      thePlayer.browserTool.loadResultsFavoritesForms();
    });
  };

  this.applyKeywordFilter = function () {
    let theKeywords = $("input#browserSearchKeywords").val();

    if (theKeywords != "") {
      $("#browserSearchKeywordsReset").toggle(true);
    }

    this.refreshActiveFilters();
    this.showResultsLoading();
    this.submitSearch();
  };

  this.doYouTubeSearch = function () {
    if (this.isProcessing()) {
      //console.log("Previous process has not finished, bailing.");
      return;
    }

    this.initializeProcessing();
    let searchPath = gc_BranchPath + "/--ajax-browser-search-youtube/";
    let searchKeywords = $("input#browserSearchKeywords").val();

    if (searchKeywords != "") {
      let searchURL = encodeURI(searchPath + searchKeywords);
      this.resetResults();
      this.showResultsLoading();
      $("#results").load(searchURL, function () {
        thePlayer.browserTool.finalCleanup();
      });
    }
  };

  this.goToResultsPage = function (resultsURL) {
    if (this.isProcessing()) {
      //console.log("Previous process has not finished, bailing.");
      return;
    }

    this.initializeProcessing();
    this.resetResults();
    this.spinner("results");
    $("#results").load(resultsURL, function () {
      thePlayer.browserTool.finalCleanup();
      thePlayer.browserTool.loadResultsFavoritesForms();
    });
  };

  this.nextYouTubeResultsPage = function (strSearchTerm, offsetNumber) {
    if (this.isProcessing()) {
      //console.log("Previous process has not finished, bailing.");
      return;
    }

    this.initializeProcessing();
    this.resetResults();
    this.showResultsLoading();
    var strNextURL = gc_BranchPath + "/";
    strNextURL += "--ajax-browser-search-youtube/";
    strNextURL += strSearchTerm + "/";
    strNextURL += offsetNumber;
    var strNextURL = encodeURI(strNextURL);
    $("#results").load(strNextURL, function () {
      thePlayer.browserTool.finalCleanup();
    });
  };
  /*****************************************
   ******   Dependency Functions  **********
   *****************************************/


  this.buildFilterSectionData = function () {
    this.filterSectionList.reset();
    let allSections = $("ul.filter-list");

    for (let i = 0; i < allSections.length; i++) {
      let newSectionObject = new BrowserFilterSection();
      newSectionObject.setSectionID($(allSections[i]).data("section-id"));
      newSectionObject.setSectionType($(allSections[i]).data("section-type"));
      newSectionObject.setSectionDOMID("#browserFilterSection-" + $(allSections[i]).data("section-id"));
      newSectionObject.setChannelID($(allSections[i]).data("section-channel-id"));
      newSectionObject.setGroupID($(allSections[i]).data("section-group-id"));
      let tmpDependenciesArray = null;
      let tmpDependenciesString = $(allSections[i]).data("section-dependencies");

      if (tmpDependenciesString != "") {
        tmpDependenciesArray = tmpDependenciesString.split("|");
      } else {
        tmpDependenciesArray = [];
      }

      newSectionObject.setParentIDs(tmpDependenciesArray);
      this.filterSectionList.addSection(newSectionObject);
    }

    this.filterSectionList.computeSectionFamilies();
  };

  this.processDependents = function ({
    strMasterSectionID,
    list,
    status
  }) {
    /* 
      #Order Of Operations 
      
      1. Get an array of dependencies for the master section being changed.
      2. Update each of those dependent sections.
        a. Scan through the sections each dependent section is dependent on.
        b. Get a list of all enabled inputs.
        c. Create the update url and update from that.
    */
    let theSection = list.getSectionByID(strMasterSectionID);
    let theChildren = theSection.getChildren(); //If there aren't any dependents found, there's nothing to do

    if (theChildren.length == 0) {
      return;
    }

    this.n_DependentsToProcess = theChildren.length;
    list.rebuildFilterSectionKeys(status);

    for (let i = 0; i < theChildren.length; i++) {
      let childParents = theChildren[i].getParents(); //initialize our tag and category filter strings

      let theTagKeys = "";
      let theCategoryKeys = ""; //cycle through all sections we depend on and collect any checked input values.

      for (let j = 0; j < childParents.length; j++) {
        let theKeyIDsString = childParents[j].getKeyString();
        let theKeyType = childParents[j].getSectionType();

        if (theKeyType == "tag") {
          theTagKeys += theKeyIDsString;
        } else {
          theCategoryKeys += theKeyIDsString;
        }
      } // Check if any of the key strings is empty and set it to -1,
      // otherwise trim the last | off the end;


      if (theTagKeys == "") {
        theTagKeys = "-1";
      }

      if (theCategoryKeys == "") {
        theCategoryKeys = "-1";
      }
      /* 	
        Now we have a list of categories and tags to key on (from all sections we 
        depend on. We are ready to construct a url to send to the refiner.
      */


      if (theTagKeys !== "-1" || theCategoryKeys !== "-1") {
        let theURL = "/--ajax-browser-filter-refiner/";
        theURL += theChildren[i].getSectionID() + "/"; //what is the ID of the section we're updating

        theURL += theChildren[i].getSectionType() + "/"; //what type of items are we retrieving (cats or tags)

        theURL += theChildren[i].getChannelID() + "/"; //what channel are we looking at

        theURL += theChildren[i].getGroupID() + "/"; //what is the group (cat or tag) that we are filtering

        theURL += theCategoryKeys + "/"; //what are the categories we have to match

        theURL += theTagKeys + "/"; //what are the tags we have to match
        // debugger;
        // $.get(theURL, function(data) {
        //   let theDependent = JSON.parse(data);
        //   thePlayer.browserTool.processDependentFilterSection(theDependent);
        // });

        return theURL;
      } else {// this.restoreFilterSection( theChildren[i].getSectionID() );
      }
    }
  };

  this.processDependentFilterSection = function (dependentObject) {
    let theIDs = dependentObject.ids;
    let theSectionID = dependentObject.sectionID;
    let theInputs = $("#browserFilterSection-" + theSectionID).find("input:checkbox");

    for (let i = 0; i < theInputs.length; i++) {
      let theInputID = $(theInputs[i]).val();
      let theIndex = theIDs.indexOf(parseInt(theInputID));

      if (theIndex == -1) {
        $(theInputs[i]).prop("checked", false);
        $(theInputs[i]).closest("li").toggleClass("hidden", true);
        $(theInputs[i]).closest("li").toggleClass("visible", false);
      } else {
        //console.log("Input WAS found in matching IDs");
        $(theInputs[i]).closest("li").toggleClass("hidden", false);
        $(theInputs[i]).closest("li").toggleClass("visible", true);
      }
    }

    let theFilters = $("#browserFilterSection-" + theSectionID).find("li.filter.visible");

    if (theFilters.length == 0) {
      $("#browserFilterSection-" + theSectionID).closest(".accordion-item").toggleClass("has-filters", false);
      $("#browserFilterSection-" + theSectionID).closest(".accordion-item").hide();
    } else {
      $("#browserFilterSection-" + theSectionID).closest(".accordion-item").show();
    }

    this.dependentFinishedUpdating(theSectionID);
  };

  this.dependentFinishedUpdating = function (strSectionID) {
    this.n_DependentsToProcess--;
  };

  this.waitForDependentsToFinishUpdating = function () {
    if (this.n_DependentsToProcess > 0) {
      this.n_UpdateTimer = setTimeout(function () {
        thePlayer.browserTool.waitForDependentsToFinishUpdating();
      }, 100);
      return;
    }

    clearTimeout(this.n_UpdateTimer);
    this.n_UpdateTimer = -1;
    this.submitSearch();
    this.refreshActiveFilters();
  };

  this.restoreFilterSection = function (strSectionID) {
    let theSection = $("#browserFilterSection-" + strSectionID);
    let theInputs = $(theSection).find("input:checkbox");

    for (let i = 0; i < theInputs.length; i++) {
      $(theInputs[i]).closest("li").toggleClass("hidden", false);
      $(theInputs[i]).closest("li").toggleClass("visible", true);
    }

    $(theSection).closest(".accordion-item").show();
    this.dependentFinishedUpdating(strSectionID);
  };
  /*****************************************
   *************   Fav Forms Loading  ************
   *****************************************/


  this.reloadResultsFavoritesForms = function () {
    let theResults = $(".browser-result-fav-wrapper.fav-enabled");
    let theIDs = "";

    for (let i = 0; i < theResults.length; i++) {
      $(theResults[i]).empty();
    }

    this.loadResultsFavoritesForms();
  };

  this.loadResultsFavoritesForms = function () {
    let theResults = $(".browser-result-fav-wrapper.fav-enabled");
    let theIDs = "";

    for (let i = 0; i < theResults.length; i++) {
      theIDs += $(theResults[i]).data("entry-id");

      if (i != theResults.length - 1) {
        theIDs += "|";
      }
    }

    let theURL = gc_BranchPath + "/--ajax-browser-load-favorite-forms/";
    theURL += theIDs;
    $.get(theURL, function (data) {
      let theFavorites = JSON.parse(data);
      thePlayer.browserTool.pushResultsFavoritesForms(theFavorites);
    });
  };

  this.pushResultsFavoritesForms = function (arrFavorites) {
    let theForms = arrFavorites.formsArray;

    for (let i = 0; i < theForms.length; i++) {
      let theEntryID = theForms[i].itemID;
      let theItem = $("#favWrapper-" + theEntryID);
      $(theItem).html(theForms[i].itemForm);
      let theMetaID = "#browserResultItem-" + theEntryID;

      if (theForms[i].itemChapters != "" && theForms[i].itemChapters != "0") {
        $(theMetaID).toggleClass("has-chapters", true);
      } else {
        $(theMetaID).toggleClass("has-chapters", false);
      }

      if (theForms[i].itemLoops != "" && theForms[i].itemLoops != "0") {
        $(theMetaID).toggleClass("has-loops", true);
      } else {
        $(theMetaID).toggleClass("has-loops", false);
      }

      if (theForms[i].itemUserLoops != "" && theForms[i].itemUserLoops != "0") {
        $(theMetaID).toggleClass("has-user-loops", true);
      } else {
        $(theMetaID).toggleClass("has-user-loops", false);
      }
    }
  };

  this.initializeProcessing = function () {
    //console.log("Initializing Processing.");
    this.b_IsProcessing = true;
    $("#browser-wrapper").toggleClass("updating", true);
  };

  this.isProcessing = function () {
    return this.b_IsProcessing;
  };

  this.finalCleanup = function () {
    // this function should only be called when all operations are done
    // 1. Filters are loaded.
    // 2. Results are loaded
    //console.log("Finished Processing.");
    this.b_IsProcessing = false;
    $("#browser-wrapper").toggleClass("updating", false);
  };

  this.toggleFavoriteInBrowser = function (sender) {
    //console.log('Submitting Favorite');
    var formID = $(sender).closest("form.submitFavoriteForm");
    courseID = $(formID).attr("data-id");
    formData = $(formID).serialize();
    badgeWrapperID = $(formID).closest(".browser-result-fav-wrapper").attr("id");
    $("#" + badgeWrapperID + " button").html('<i class="fa fa-spinner fa-spin fa-2x"></i>');
    $.ajax({
      type: "POST",
      url: $(formID).attr("action"),
      data: formData
    }).done(function (response) {
      $("#" + badgeWrapperID).load(gc_BranchPath + "/--ajax-browser-favorite-entry/" + courseID);
    });
  };
  /*****************************************
   *****   Misc Display Functions  *********
   *****************************************/


  this.spinner = function (elementID) {
    var strSpinner = "<div id='spinner'><i class='fa fa-spinner fa-spin fa-2x'></i></div>";
    $("#" + elementID).html(strSpinner);
  };

  this.showResultsLoading = function () {
    this.spinner("results");
  };

  this.browserDisplayInstructions = function (nCode) {
    var strMessage = "<div class='browser-message'>";

    if (nCode == 0) {
      // Nothing selected
      strMessage += "Pick a type of content from the choices above.";
    } else if (nCode == 1) {
      // Tag Group Selected
      strMessage += "Choose a tag.";
    } else if (nCode == 2) {
      // Category Group Selected
      strMessage += "Choose a category.";
    } else if (nCode == 3) {
      // Search Selected
      strMessage += "Enter a search keyword.";
    }

    strMessage += "</div>";
    $("#results").html(strMessage);
  };
}
function BrowserFilterSectionList(browserTool) {
  this.theBrowser = browserTool;
  this.a_Sections = [];

  this.reset = function () {
    this.a_Sections = [];
  };

  this.addSection = function (objSection) {
    this.a_Sections.push(objSection);
  };

  this.computeSectionFamilies = function () {
    // First, compute parents based on Parents ID array used when creating each section.
    for (let i = 0; i < this.a_Sections.length; i++) {
      let theSection = this.a_Sections[i];
      let theParentIDs = theSection.getParentIDs();

      for (let j = 0; j < theParentIDs.length; j++) {
        theSection.addParent(this.getSectionByID(theParentIDs[j]));
      }
    } //Now that parents are all setup, add the children.


    for (let i = 0; i < this.a_Sections.length; i++) {
      let theSection = this.a_Sections[i];
      let theParents = theSection.getParents();

      for (let j = 0; j < theParents.length; j++) {
        theParents[j].addChild(theSection);
      }
    }
  };

  this.getSectionByID = function (strSectionID) {
    let theMatchingIndex = -1;

    for (let i = 0; i < this.a_Sections.length; i++) {
      if (this.a_Sections[i].getSectionID() == strSectionID) {
        theMatchingIndex = i;
        break;
      }
    }

    return this.a_Sections[theMatchingIndex];
  }; // any checked inputs into an array with that section


  this.rebuildFilterSectionKeys = function (currentStatus) {
    // currentStatus is the the current state of the browser store
    for (let i = 0; i < this.a_Sections.length; i++) {
      // extract sub array of currentstatus to rebuild the section keys
      let sectionStatuses = [];
      let currentSectionId = this.a_Sections[i].getSectionID();
      Object.entries(currentStatus).forEach(([key, value]) => {
        if (key.startsWith(currentSectionId)) {
          // console.log(`${key}: ${value}`);
          if (value) {
            let obj = {};
            obj[key] = value;
            sectionStatuses.push(obj);
          }
        }
      });
      if (sectionStatuses.length) this.a_Sections[i].rebuildKeys(sectionStatuses);
    }
  };
}
function BrowserFilterSection() {
  this.str_SectionID = "";
  this.str_SectionType = "";
  this.str_ChannelID = 0;
  this.str_GroupID = "";
  this.sectionDOMID = "";
  this.a_ParentIDs = [];
  this.a_Children = []; //sections that key off of me

  this.a_Parents = []; // sections that I key off of

  this.a_Keys = [];

  this.reset = function () {
    this.str_SectionType = "";
    this.str_ChannelID = 0;
    this.str_GroupID = "";
    this.sectionDOMID = "";
    this.a_ParentIDs = [];
    this.a_Children = []; //sections that key off of me

    this.a_Parents = []; // sections that I key off of

    this.a_Keys = [];
  };

  this.setSectionID = function (strID) {
    this.str_SectionID = strID;
  };

  this.setSectionDOMID = function (strID) {
    this.sectionDOMID = strID;
  };

  this.setSectionType = function (strType) {
    this.str_SectionType = strType;
  };

  this.setChannelID = function (strID) {
    this.str_ChannelID = strID;
  };

  this.setGroupID = function (strID) {
    this.str_GroupID = strID;
  };

  this.getSectionID = function () {
    return this.str_SectionID;
  };

  this.getSectionDOMID = function () {
    return this.sectionDOMID;
  };

  this.getSectionType = function () {
    return this.str_SectionType;
  };

  this.getChannelID = function () {
    return this.str_ChannelID;
  };

  this.getGroupID = function () {
    return this.str_GroupID;
  };

  this.setParentIDs = function (aParentIDs) {
    this.a_ParentIDs = aParentIDs;
  };

  this.getParentIDs = function () {
    return this.a_ParentIDs;
  };

  this.getChildren = function () {
    return this.a_Children;
  };

  this.addChild = function (objChild) {
    this.a_Children.push(objChild);
  };

  this.getParents = function () {
    return this.a_Parents;
  };

  this.addParent = function (objParent) {
    this.a_Parents.push(objParent);
  };

  this.getKeyString = function () {
    let theKeyString = "";

    for (let i = 0; i < this.a_Keys.length; i++) {
      theKeyString += this.a_Keys[i];

      if (i < this.a_Keys.length - 1) {
        theKeyString += "|";
      }
    }

    return theKeyString;
  };

  this.resetKeys = function () {
    this.a_Keys = [];
  };

  this.addKey = function (strKey) {
    this.a_Keys.push(strKey);
  };

  this.rebuildKeys = function (sectionStatuses) {
    this.resetKeys();
    console.log("sStat", sectionStatuses); // let tmpInputList = $(this.sectionDOMID).find('input:checkbox:checked');

    for (let i = 0; i < sectionStatuses.length; i++) {
      let status = sectionStatuses[i];
      let key = Object.keys(status)[0];
      let val = parseInt(key.match(/\d+$/)[0]);
      this.addKey(val);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/@quasar/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/browse/CurrentSearch.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
;


const {
  mapActions,
  mapGetters,
  mapState
} = Object(vuex_esm["a" /* createNamespacedHelpers */])("browser");
/* harmony default export */ var CurrentSearchvue_type_script_lang_js_ = ({
  name: "CurrentSearchBanner",
  data: () => ({
    filters: null,
    componentKey: 0,
    toggle1: false
  }),
  computed: {
    props1() {
      return this.toggle1 === true ? {
        class: "q-ml-sm q-pa-md bg-accent text-white rounded-borders",
        style: "font-size: 24px"
      } : {
        class: "q-ml-xl q-px-xl q-py-lg bg-blue text-white",
        style: "border-radius:  25px; background-color: rgba(0, 153, 255, 0.85) !important;"
      };
    },

    ...mapState(["searching", "activeFilters"])
  },
  watch: {
    activeFilters() {
      this.forceUpdate();
    }

  },
  methods: {
    entitle(str) {
      return format["b" /* default */].capitalize(str.replace("-", " "));
    },

    morphContent1() {
      const onToggle = () => {
        this.toggle1 = this.toggle1 !== true;
      };

      if (this.cancel1 === void 0 || this.cancel1() === false) {
        this.cancel1 = Object(morph["a" /* default */])({
          from: this.$refs.morphedElement1,
          onToggle,
          duration: 500,
          tween: true,
          onEnd: end => {
            end === "from" && onToggle();
          }
        });
      }
    },

    forceUpdate() {
      this.componentKey += 1;
    },

    deleteFilter(data) {
      return this.removeFilter(data);
    },

    ...mapActions(["removeFilter"])
  }
});
// CONCATENATED MODULE: ./src/components/browse/CurrentSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var browse_CurrentSearchvue_type_script_lang_js_ = (CurrentSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/browse/CurrentSearch.vue?vue&type=style&index=0&id=001fa2f8&scoped=true&lang=css&
var CurrentSearchvue_type_style_index_0_id_001fa2f8_scoped_true_lang_css_ = __webpack_require__("8484");

// EXTERNAL MODULE: ./node_modules/@quasar/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("42e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 4 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__("c294");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/browse/CurrentSearch.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  browse_CurrentSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "001fa2f8",
  null
  
)

/* harmony default export */ var CurrentSearch = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QToolbar: QToolbar["a" /* default */],QBtn: QBtn["a" /* default */],QBadge: QBadge["a" /* default */],QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QChip: QChip["a" /* default */],QFab: QFab["a" /* default */]});


/***/ }),

/***/ "8484":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentSearch_vue_vue_type_style_index_0_id_001fa2f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9dc8");
/* harmony import */ var _node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentSearch_vue_vue_type_style_index_0_id_001fa2f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_quasar_app_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_quasar_app_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_quasar_app_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_quasar_app_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentSearch_vue_vue_type_style_index_0_id_001fa2f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9dc8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=browser.db9f5f84.js.map