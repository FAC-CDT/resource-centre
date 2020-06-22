const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { AIRTABLE_API_KEY } = process.env;
  const url = `https://api.airtable.com/v0/appZmhWkwHSjmKw7g/sessions`;

  let status;

  const incomingData = JSON.parse(event.body);
  const allEntries = Object.entries(incomingData);

  let filledEntries = [];
  allEntries.forEach((entry) => {
    if (entry[1]) {
      filledEntries.push(entry);
    }
  });

  const fields = Object.fromEntries(filledEntries);

  console.log({ fields });
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      fields,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })
    .then((res) => {
      console.log("this is status", res.status);
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
      body: "Session successfully added!",
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
