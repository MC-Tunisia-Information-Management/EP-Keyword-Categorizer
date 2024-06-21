function categorizeKeywords() {
  var sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("oGT Database");
  var lastRow = sheet.getLastRow();
  var keywordsRange = sheet.getRange("BG4:BG" + lastRow);
  var keywords = keywordsRange.getValues();

  for (var i = 0; i < keywords.length; i++) {
    var keywordList = keywords[i][0].split(", ");
    var itCount = 0;
    var financeCount = 0;
    var businessAdminCount = 0;
    var marketinCount = 0;
    var teachingCount = 0;
    var otherCount = 0;
    var engineerCount = 0;

    if (keywordList.length === 1 && keywordList[0] === "") {
      sheet.getRange("BI" + (i + 4)).setValue("");
      continue;
    }

    for (var j = 0; j < keywordList.length; j++) {
      var keyword = keywordList[j];
      if (itKeywords.indexOf(keyword) !== -1) {
        itCount++;
      } else if (financeKeywords.indexOf(keyword) !== -1) {
        financeCount++;
      } else if (businessAdminKeywords.indexOf(keyword) !== -1) {
        businessAdminCount++;
      } else if (teachingKeywords.indexOf(keyword) !== -1) {
        teachingCount++;
      } else if (otherKeywords.indexOf(keyword) !== -1) {
        otherCount++;
      } else if (engineeringDictionary.indexOf(keyword) !== -1) {
        engineerCount++;
      } else if (marketingKeywords.indexOf(keyword) !== -1) {
        marketinCount++;
      }
    }

    var max = Math.max(
      itCount,
      financeCount,
      businessAdminCount,
      teachingCount,
      otherCount,
      engineerCount
    );
    var category = "";

    if (max === itCount) {
      category = "IT";
    } else if (max === financeCount) {
      category = "Finance";
    } else if (max === businessAdminCount) {
      category = "Business Admin";
    } else if (max === teachingCount) {
      category = "Teaching";
    } else if (max === otherCount) {
      category = "Other";
    } else if (max === engineerCount) {
      category = "Engineering";
    } else if (max === marketinCount) {
      category = "Marketing";
    }

    sheet.getRange("BI" + (i + 4)).setValue(category);
  }
}
