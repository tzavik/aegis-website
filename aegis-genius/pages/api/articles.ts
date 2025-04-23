import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Article from '../../../models/Article'; // Assuming you have an Article model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const articles = await Article.find({}).sort({ createdAt: -1 }).limit(3); // Fetch latest 3 articles
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching articles', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}