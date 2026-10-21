import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Use GET' });
  }

  // The browser sends the token in a header that looks like: "Bearer abc123..."
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    // Check the token was stamped with our secret key and has not expired
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ user: { id: data.id, email: data.email } });
  } catch (error) {
    return res.status(401).json({ error: 'Not logged in' });
  }
}