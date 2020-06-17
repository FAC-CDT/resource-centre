const Airtable = require("airtable");

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appnkfsVctBYM5kva");

  const newResourceData = JSON.parse(event.body);

    base("resources").create(
      [
        {
          fields: {
            "What is the title of this resource?": newResourceData.title,
            "Which organisation are you from?": newResourceData.organisation,
            "What category is this resource?": newResourceData.category,
            "What is the web address of this resource?": newResourceData.url,
          },
        },
      ],
      (err) => {
        if (err)
          return {
            statusCode: 400,
            body: "There was an error",
            headers: {
              "cache-control": "Cache-Control: max-age=60, public",
              "Access-Control-Allow-Methods": "*",
            },
          };
      }
    );

    return {
      statusCode: 200,
      body: "Resource successfully added!",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  };
