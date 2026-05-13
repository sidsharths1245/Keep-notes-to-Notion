# 📝 Google Keep to Notion Importer

Easily migrate your notes from Google Keep into a structured Notion database. 

When you export notes from Google Keep to Google Docs, they are separated by double line breaks. This repository contains a Google Apps Script that parses that Google Doc, safely separates your notes (keeping single line breaks intact), splits them into "Title" and "Body", and exports them to a Google Sheet. From there, it's a seamless CSV import into Notion.

## 🚀 How to Use

### Step 1: Export Keep Notes to Google Docs
1. Open [Google Keep](https://keep.google.com/).
2. Select all the notes you want to export (you can hover and click the checkmarks, or use `Ctrl+A` / `Cmd+A` to select all).
3. Click the three dots (`⋮`) in the top right menu and select **"Copy to Google Docs"**.
4. Click **"Open Doc"** when the success toast appears at the bottom left of your screen.

### Step 2: Run the Apps Script in Google Docs
1. In your newly created Google Doc, click **Extensions** > **Apps Script**.
2. Delete any existing code in the editor and paste the `exportNotes.js` script provided below.
3. Click the **Save** icon (💾) and then hit **Run** (▶️).
4. *Note: Google will ask you to authorize the script. Click your account > **Advanced** > **Go to Untitled project (unsafe)** to allow it to read your document and create the spreadsheet.*
5. Return to your Google Doc. At the top of the page, click the new link that says **"✅ Export complete! Find your spreadsheet here"**.

### Step 3: Prepare and Download the CSV
1. Open the generated Google Sheet. You will see your notes cleanly split into "Title" and "Body" columns.
2. **(Optional)** If you are importing into an *existing* Notion database, change the column headers (A1 and B1) to exactly match the property names in your Notion database (e.g., change "Title" to "Name" and "Body" to "Notes").
3. Click **File** > **Download** > **Comma Separated Values (.csv)**.

### Step 4: Import into Notion

**To create a NEW database:**
1. Open Notion and click **Import** in the bottom-left sidebar.
2. Choose **CSV** and upload your downloaded file. Notion will create a new database automatically.

**To merge into an EXISTING database:**
1. Open your existing Notion database.
2. Click the three dots (`...`) at the top right of the database block or page.
3. Select **Merge with CSV** and upload your file. Notion will match the column names and append your Keep notes to the database.
