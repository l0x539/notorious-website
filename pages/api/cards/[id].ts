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
  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET': /* Get a model by its ID */
      try {
        const card = await Card.findById(id);
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
        const card = await Card.findByIdAndUpdate(id, req.body, {
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
        const deletedCard = await Card.deleteOne({_id: id});
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
