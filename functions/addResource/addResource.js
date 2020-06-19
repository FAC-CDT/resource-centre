const Airtable = require("airtable");

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appZmhWkwHSjmKw7g");

  const newResourceData = JSON.parse(event.body);

    base("resources").create(
      [
        {
          fields: {
            resource_title: newResourceData.title,
            organisation: newResourceData.organisation,
            resource_category: newResourceData.category,
            resource_url: newResourceData.url,
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
