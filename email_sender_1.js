function sendEmailCampaign() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var name = row[0];
    var email = row[1];
    var message = row[2];
    var sent = row[3];

    if (sent !== "YES") {
      var subject = "Hello " + name + " - Your Update";
      var body = "Hi " + name + ",\n\n" + message + "\n\nBest regards,\nYour Team";

      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body
      });

      sheet.getRange(i + 1, 4).setValue("YES");
    }
  }

  SpreadsheetApp.getUi().alert("Email campaign completed!");
}
