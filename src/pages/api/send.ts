import Airtable from 'airtable';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const Send = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') {
    return;
  }

  const data = JSON.parse(req.body);
  const base = new Airtable({
    apiKey: serverRuntimeConfig.AIRTABLE_API_KEY,
  }).base('appzWuAjGBNTGAsBh');

  const result = await base('tbllx1CbW9EcbtDNd').create([
    {
      fields: {
        fld53K8oNQwFy5Pec: data.name,
        fldwShE0gSTkD4ctY: data.email,
      },
    },
  ]);

  if (!result) {
    res.status(400).send(400);
    return;
  }

  res.status(200).send(200);
};

export default Send;
