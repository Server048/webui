// pages/api/discord-webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // VERIFIKASI PERMINTAAN (PENTING UNTUK KEAMANAN!)
      // Tambahkan verifikasi di sini untuk memastikan permintaan berasal dari Discord.
      // Ini mungkin melibatkan verifikasi signature atau token rahasia.

      const data = req.body;

      // PROSES DATA WEBHOOK
      // Contoh: Simpan data ke database (ganti dengan logika Anda)
      console.log('Data Webhook Diterima:', data);

      // ... logika untuk menyimpan data ke database, mengirim email, atau tindakan lain ...


      res.status(200).json({ message: 'Webhook received successfully' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

