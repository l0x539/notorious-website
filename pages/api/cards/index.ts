import {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../../lib/dbConnect';
import Card from '../../../models/Card';

type Data = {
  success: boolean;
  data?:any[];
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
  const {method} = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const pets = await Card.find({}); /* find all the
        data in our database */
        res.status(200).json({success: true, data: pets});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'POST':
      try {
        const pet = await Card.create(
            req.body,
        ); /* create a new model in the database */
        res.status(201).json({success: true, data: pet});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default:
      res.status(400).json({success: false});
      break;
  }
};
export default handler;
