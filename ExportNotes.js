function exportNotesToSheetV2() {
  var doc = DocumentApp.getActiveDocument();
  var paragraphs = doc.getBody().getParagraphs();
  
  var notes = [];
  var currentNoteLines = [];
  
  // Loop through every line in the document
  for (var i = 0; i < paragraphs.length; i++) {
    var text = paragraphs[i].getText();
    
    // If the line is completely blank (double line break), it marks the end of a note
    if (text.trim() === "") {
      if (currentNoteLines.length > 0) {
        notes.push(currentNoteLines);
        currentNoteLines = []; // Reset for the next note
      }
    } else {
      // If it's a single line break with text, keep it in the current note
      currentNoteLines.push(text);
    }
  }
  
  // Make sure to catch the very last note in the document
  if (currentNoteLines.length > 0) {
    notes.push(currentNoteLines);
  }
  
  // Create the new Google Sheet
  var sheet = SpreadsheetApp.create(doc.getName() + " - Notion Export V2");
  var sheetData = [["Title", "Body"]];
  
  // Format the grouped lines into Title and Body
  for (var j = 0; j < notes.length; j++) {
    var noteLines = notes[j];
    var title = noteLines[0]; // First line is the title
    var bodyText = noteLines.slice(1).join('\n'); // Everything else stays together as the body
    sheetData.push([title, bodyText]);
  }
  
  // Send the data to the spreadsheet
  sheet.getActiveSheet().getRange(1, 1, sheetData.length, 2).setValues(sheetData);
  
  // Put the link to the sheet at the top of your Google Doc
  doc.getBody().insertParagraph(0, "✅ V2 Export complete! Find your spreadsheet here: " + sheet.getUrl());
}
