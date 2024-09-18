const { test } = require('playwright/test');  // Use 'firefox' or 'webkit' as needed
const fs = require('fs');
const path = require('path');

test("Download filed",async ({page}) => {
  // Launch a browser instance


  // Navigate to the page with the download link
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html'); // Replace with your URL

  // Ensure the download directory exists
  const rootDir = path.resolve(__dirname, '..'); // Adjust this if the script is not in a subdirectory
  const downloadDir = path.join(rootDir, 'downloads');  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  // Set up a download listener
  const [download] = await Promise.all([
    page.waitForEvent('download'),  // Wait for the download event
    page.click('#downloadButton')   // Click the link or button that triggers the download (replace with your selector)
  ]);

  // Define where to save the file
  const filePath = path.join(downloadDir, await download.suggestedFilename());

  // Save the file to the desired path
  await download.saveAs(filePath);

  console.log(`File downloaded to ${filePath}`);

  // Close the browser
});
