const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { AIRTABLE_API_KEY } = process.env;
  const url = `https://api.airtable.com/v0/appZmhWkwHSjmKw7g/resources`;

  let status;

  const newResourceData = JSON.parse(event.body);

  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      fields: {
        resource_title: newResourceData.title,
        organisation: newResourceData.organisation,
        resource_category: newResourceData.category,
        resource_url: newResourceData.url,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        status = 200;
      }
    })
    .catch(function (error) {
      console.error(error);
      status = 400;
    });

  if (status === 200) {
    return {
      statusCode: 200,
      body: "Resource successfully added!",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  } else {
    return {
      statusCode: 400,
      body: "There was an error",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  }
};
