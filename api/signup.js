import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  // Only accept POST requests (a form being sent)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST' });
  }

  const { email, password } = req.body || {};

  // Check both boxes were filled in
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    // Scramble the password. The real one is never saved.
    const passwordHash = await bcrypt.hash(password, 10);

    // Save the user. If the email already exists, do nothing.
    const rows = await sql`
      INSERT INTO users (email, password_hash)
      VALUES (${email.toLowerCase()}, ${passwordHash})
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email
    `;

    if (rows.length === 0) {
      return res.status(409).json({ error: 'That email is already registered' });
    }

    return res.status(201).json({ message: 'Account created', user: rows[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}