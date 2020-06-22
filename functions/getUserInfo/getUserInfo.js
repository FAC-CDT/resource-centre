
const Airtable = require('airtable');

exports.handler = (event, context, callback) => {
const { API_URL, AIRTABLE_API_KEY } = process.env;

Airtable.configure({
  endpointUrl: API_URL,
  apiKey: AIRTABLE_API_KEY
});

const base = Airtable.base('appZmhWkwHSjmKw7g');
const username = JSON.parse(event.body);
const data = [];

base('users')
  .select({
    filterByFormula: `({username}='${username}')`,
    maxRecords: 1,
    view: "Grid view"
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        delete record.fields.password;
        data.push(record);
      });
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
      } else {
        const body = JSON.stringify({ records: data });
        const response = {
          statusCode: 200,
          body: body,
          headers: {
            "content-type": "application/json",
            "cache-control": "Cache-Control: max-age=60, public"
          }
        };
        callback(null, response);
      }
    }
  );
};
