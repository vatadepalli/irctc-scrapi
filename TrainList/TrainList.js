module.exports = TrainList = async page => {
  console.log("TrainList");

  page.on("response", async response => {
    const url = response.url();
    if (url.match(".*/eticketing/.*")) {
      console.log(url);
      const body = await response.text();
      if (body) {
        try {
          const json = JSON.parse(body);
          console.log(JSON.stringify(json));
        } catch (e) {}
      }
    }
  });
};
