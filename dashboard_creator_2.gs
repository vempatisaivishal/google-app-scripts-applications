
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Dashboard")
    .addItem("Show Sales Dashboard", "showDashboard")
    .addToUi();
}


function showDashboard() {
  var html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("Sales Dashboard")
    .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}


function getSalesData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues(); 
  return data; 
}
