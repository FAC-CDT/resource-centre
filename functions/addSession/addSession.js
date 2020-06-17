const Airtable = require("airtable");

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appnkfsVctBYM5kva");

  const newSessionData = JSON.parse(event.body);

  base("sessions").create(
    [
      {
        fields: {
          "What is the title of the session?": newSessionData.title,
          "Which organisation are you from?": newSessionData.organisation,
          "Who is the host of this session?": newSessionData.hostName,
          host_image: newSessionData.hostImage,
          session_date: newSessionData.date,
          start_time: newSessionData.startTime,
          end_time: newSessionData.endTime,
          "What is the web address for your first resource?":
            newSessionData.resource1Url,
          "What is the title of your first resource?":
            newSessionData.resource1Title,
          "What category is your first resource?":
            newSessionData.resource1Category,
          "What is the web address for your second resource?":
            newSessionData.resource1Url,
          "What is the title of your second resource?":
            newSessionData.resource1Title,
          "What category is your second resource?":
            newSessionData.resource1Category,
          "What is the web address for your third resource?":
            newSessionData.resource1Url,
          "What is the title of your third resource?":
            newSessionData.resource1Title,
          "What category is your third resource?":
            newSessionData.resource1Category,
          "What is the web address for your fourth resource?":
            newSessionData.resource1Url,
          "What is the title of your fourth resource?":
            newSessionData.resource1Title,
          "What category is your fourth resource?":
            newSessionData.resource1Category,
          "Do you have a Staff only resource? If so what is its web address?":
            newSessionData.staffResource1Url,
          "What category is your first staff only resource?":
            newSessionData.staffResource1Category,
          staff_resource1_title: newSessionData.staffResource1Title,
          "Do you have a second Staff only resource? If so what is its web address?":
            newSessionData.staffResource2Url,
          staff_resource2_title: newSessionData.staffResource2Title,
          "What category is your second staff only resource?":
            newSessionData.staffResource2Category,
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
