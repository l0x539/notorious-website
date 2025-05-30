import {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../../lib/dbConnect';
import {getSession} from '../../../lib/session';
import news from '../../../models/News';

type Data = {
  success: boolean;
  data?:any[];
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
  const session = await getSession(req, res);
  if (!session.loggedIn) {
    return res.status(401).json({success: false});
  }

  const {method} = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const news1 = await news.find({}); /* find all the
        data in our database */
        res.status(200).json({success: true, data: news1});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case 'POST':
      try {
        const new1 = await news.create(
            req.body,
        ); /* create a new model in the database */
        res.status(201).json({success: true, data: new1});
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
