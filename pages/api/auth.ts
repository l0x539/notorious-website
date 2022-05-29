// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from '../../lib/session';

type Data = {
  status: string
}

const Auth = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
  const session = await getSession(req, res);

  if (session && !session?.loggedIn) {
    if (`${req.body.name}`.trim().toLowerCase() ===
     process.env.ADMIN_NAME &&
    req.body.password === process.env.ADMIN_PASSWORD) {
      session.loggedIn = true;

      return res.status(200).send({status: 'success'});
    } else return res.status(401).send({status: 'failed to login'});
  } else {
    return res.redirect('/admin');
  }
};

export default Auth;

export const config = {
  api: {
    externalResolver: true,
  },
};
