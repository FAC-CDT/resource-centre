const Airtable = require("airtable");

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appZmhWkwHSjmKw7g");

  const newSessionData = JSON.parse(event.body);

  base("sessions").update(
    [
      {
        "id": newSessionData.sessionId,
        fields: {
          session_title: newSessionData.session_title,
          organisation: newSessionData.organisation,
          session_host: newSessionData.session_host,
          host_image: newSessionData.host_image,
          session_date: newSessionData.session_date,
          start_time: newSessionData.start_time,
          end_time: newSessionData.end_time,
          resource1_url: newSessionData.resource1_url,
          resource1_title: newSessionData.resource1_title,
          resource1_category: newSessionData.resource1_category,
          resource2_url: newSessionData.resource2_url,
          resource2_title: newSessionData.resource2_title,
          resource2_category: newSessionData.resource2_category,
          resource3_url: newSessionData.resource3_url,
          resource3_title: newSessionData.resource3_title,
          resource3_category: newSessionData.resource3_category,
          resource4_url: newSessionData.resource4_url,
          resource4_title: newSessionData.resource4_title,
          resource4_category: newSessionData.resource4_category,
          staff_resource1_url: newSessionData.staff_resource1_url,
          staff_resource1_category: newSessionData.staff_resource1_category,
          staff_resource1_title: newSessionData.staff_resource1_title,
          staff_resource2_url: newSessionData.staff_resource2_url,
          staff_resource2_title: newSessionData.staff_resource2_title,
          staff_resource2_category: newSessionData.staff_resource2_category,
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
