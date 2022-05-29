// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from '../../lib/session';

type Data = {
  status: string
}

const Logout = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
  const session = await getSession(req, res);

  if (session && session?.loggedIn) {
    session.loggedIn = false;
    return res.redirect('/admin/login');
  } else {
    return res.redirect('/admin');
  }
};

export default Logout;

export const config = {
  api: {
    externalResolver: true,
  },
};
