// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type NFTCard = {
  name: string;
}

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<NFTCard>,
) => {
  const {method} = req;

  switch (method) {
    case 'POST':
      return res.status(200).json({name: 'post request', ...req.body});
    case 'GET':
    case 'PUT':
    case 'DELETE':
    default:
      return res.status(200).json({name: 'get request'});
  }
};

export default handler;
