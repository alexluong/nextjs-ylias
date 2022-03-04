import Airtable from "airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export function fetchChannel(channelId) {
  return new Promise((resolve) => {
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      AIRTABLE_BASE_ID
    );

    base("channels")
      .select({
        filterByFormula: `{channel id} = "${channelId}"`,
      })
      .eachPage((records) => {
        if (records.length !== 1) return resolve(null);

        const record = records[0];

        const channel = {
          channelId: record.get("channel id"),
          channelName: record.get("channel name"),
        };

        resolve(channel);
      });
  });
}
