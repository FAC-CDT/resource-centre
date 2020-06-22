const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;

  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const idToDelete = JSON.parse(event.body);

  const base = Airtable.base("appZmhWkwHSjmKw7g");

  base("resources").destroy([idToDelete.id], function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    } else {
      const response = {
        statusCode: 200,
        body: "success",
        headers: {
          "content-type": "string",
          "cache-control": "Cache-Control: max-age=60, public",
          "Access-Control-Allow-Methods": "*",
        },
      };
      callback(null, response);
    }
    // console.log("Deleted", deletedRecords.length, "records");
  });
};
