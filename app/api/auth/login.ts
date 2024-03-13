import executeQuery from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const {email, password} = req.body;

    // const result = await executeQuery({
    //     query: "SELECT * FROM users WHERE email = ? AND password = ?",
    //     values: [email, password]
    // })

    
    // res.status(200).json(result)
}