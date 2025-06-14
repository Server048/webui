// pages/api/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Ganti dengan library database Anda
const database = {
  save: (data) => {
    console.log("Data saved to database (simulasi):", data);
    // ... kode untuk menyimpan data ke database Anda ...
    return Promise.resolve(true); // Berhasil menyimpan
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      await database.save(data); // Simulasi menyimpan ke database
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
