import {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../../lib/dbConnect';
import news from '../../../models/news';

type Data = {
  success: boolean;
  data?:any[];
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET': /* Get a model by its ID */
      try {
        const card = await news.findById(id);
        if (!card) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: card});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case 'PUT': /* Edit a model by its ID */
      try {
        const card = await news.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!card) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: card});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case 'DELETE': /* Delete a model by its ID */
      try {
        const deletedCard = await news.deleteOne({_id: id});
        if (!deletedCard) {
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
