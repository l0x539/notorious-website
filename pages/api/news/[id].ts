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

  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET': /* Get a model by its ID */
      try {
        const article = await news.findById(id);
        if (!article) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: article});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case 'PUT': /* Edit a model by its ID */
      try {
        const article = await news.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!article) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: article});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case 'DELETE': /* Delete a model by its ID */
      try {
        const deletedarticle = await news.deleteOne({_id: id});
        if (!deletedarticle) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: []});
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
