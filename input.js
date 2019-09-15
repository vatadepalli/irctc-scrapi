module.exports = input = async (page, origin, destination, date) => {
  // Go to ITCTC page
  await page.goto("https://www.irctc.co.in/nget/train-search");
  await page.waitForSelector("#origin > span > input");

  // Fill the origin field
  await page.focus("#origin > span > input");
  await page.keyboard.type(origin);

  // Fill the destination field
  await page.focus("#destination > span > input");
  await page.keyboard.type(destination);

  //   await page.waitFor(1000); // WAIT

  // Fill the date filed
  await page.$eval(
    // DATE
    "#divMain > div > app-main-page > div:nth-child(2) > div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > form > div.form-group.col-lg-12.col-md-12.col-sm-12.ui-float-label > p-calendar > span > input",
    (el, value) => (el.value = value),
    ""
  );

  await page.focus(
    "#divMain > div > app-main-page > div:nth-child(2) > div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > form > div.form-group.col-lg-12.col-md-12.col-sm-12.ui-float-label > p-calendar > span > input"
  );
  await page.keyboard.type(date);

  // Click search trains button
  page.click(
    "#divMain > div > app-main-page > div:nth-child(2) > div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > form > div.col-lg-12.col-md-12.col-sm-12.col-xs-12.text-center.form-group > button"
  );
};
