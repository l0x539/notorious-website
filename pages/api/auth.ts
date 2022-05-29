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
    if (req.body.name === 'pearsonwright1@gmail.com' &&
    req.body.password === '7n8KxpUb_+<KutN') {
      session.loggedIn = true;
      console.log('logging in', {session});
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
