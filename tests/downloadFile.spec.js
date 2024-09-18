const { test } = require('playwright/test');  // Use 'firefox' or 'webkit' as needed
const fs = require('fs');
const path = require('path');

test("Download filed",async ({page}) => {


  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html'); // 

  const rootDir = path.resolve(__dirname, '..'); 
  const downloadDir = path.join(rootDir, 'downloads');  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  const [download] = await Promise.all([
    page.waitForEvent('download'),  
    page.click('#downloadButton')   
  ]);

  const filePath = path.join(downloadDir, await download.suggestedFilename());

  await download.saveAs(filePath);

  console.log(`File downloaded to ${filePath}`);

});
