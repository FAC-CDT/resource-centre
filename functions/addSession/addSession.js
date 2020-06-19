const Airtable = require("airtable");

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appZmhWkwHSjmKw7g");

  const incomingData = JSON.parse(event.body);
  const allEntries = Object.entries(incomingData);

  let filledEntries = [];
  allEntries.forEach((entry) => {
    if (entry[1]) {
      filledEntries.push(entry);
    }
  });

  const newSessionData = Object.fromEntries(filledEntries);

  base("sessions").create(
    [
      {
        fields: {
          session_title: newSessionData.title,
          organisation: newSessionData.organisation,
          session_host: newSessionData.hostName,
          host_image: newSessionData.hostImage,
          session_date: newSessionData.date,
          start_time: newSessionData.startTime,
          end_time: newSessionData.endTime,
          resource1_url: newSessionData.resource1Url,
          resource1_title: newSessionData.resource1Title,
          resource1_category: newSessionData.resource1Category,
          resource2_url: newSessionData.resource2Url,
          resource2_title: newSessionData.resource2Title,
          resource2_category: newSessionData.resource2Category,
          resource3_url: newSessionData.resource3Url,
          resource3_title: newSessionData.resource3Title,
          resource3_category: newSessionData.resource3Category,
          resource4_url: newSessionData.resource4Url,
          resource4_title: newSessionData.resource4Title,
          resource4_category: newSessionData.resource4Category,
          staff_resource1_url: newSessionData.staffResource1Url,
          staff_resource1_category: newSessionData.staffResource1Category,
          staff_resource1_title: newSessionData.staffResource1Title,
          staff_resource2_url: newSessionData.staffResource2Url,
          staff_resource2_title: newSessionData.staffResource2Title,
          staff_resource2_category: newSessionData.staffResource2Category,
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
