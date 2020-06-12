const Airtable = require("airtable");
const bcrypt = require("bcrypt");

exports.handler = (event, context, callback) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appLsGaq0J2MzGoUf");
  const data = [];

  const credentials = JSON.parse(event.body);

  var username = credentials.username.toLowerCase();
  var password = credentials.password;
  
  base("credentials")
    .select({
      filterByFormula: `({organisation}='${username}')`,
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          // console.log("Retrieved", record.get("org_id"));
          data.push(record);
        });
        fetchNextPage();
      },
      async function done(err) {
        if (err) {
          const response = {
            statusCode: 400,
            body: "there was an error",
          };
          callback(null, response);
        } else {
          if (data.length > 0) {
            const passComparison = await bcrypt.compare(
              password,
              data[0].fields.password
            );
            if (passComparison) {
              const response = {
                statusCode: 200,
                body: "Login successful",
              };
              callback(null, response);
            } else {
              const response = {
                statusCode: 204,
                body: "username and password do not match",
              };
              callback(null, response);
            }
          } else {
            const response = {
              statusCode: 206,
              body: "That username does not exist",
            };
            callback(null, response);
          }
        }
      }
    );
};
