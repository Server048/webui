import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// GANTI INI DENGAN TOKEN WEBHOOK ANDA YANG SEBENARNYA!
const WEBHOOK_TOKEN = process.env.DISCORD_WEBHOOK_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const signature = req.headers['x-signature-ed25519'] as string | undefined;
    const timestamp = req.headers['x-signature-timestamp'] as string | undefined;
    const body = JSON.stringify(req.body);

    if (!signature || !timestamp || !WEBHOOK_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!verifySignature(body, signature, timestamp, WEBHOOK_TOKEN)) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    try {
      const data = req.body;

      // PROSES DATA WEBHOOK BERDASARKAN EVENT
      switch (data.t) { // Periksa field 't' untuk tipe event
        case 'MESSAGE_CREATE':
          handleMessageCreate(data);
          break;
        case 'READY':
          handleReady(data);
          break;
        // Tambahkan kasus lain untuk event yang Anda inginkan
        default:
          console.log('Event tidak dikenal:', data.t);
      }

      res.status(200).json({ message: 'Webhook received successfully' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

function verifySignature(body: string, signature: string, timestamp: string, token: string): boolean {
    const hmac = crypto.createHmac('sha256', token);
    hmac.update(`${timestamp}${body}`);
    const calculatedSignature = hmac.digest('hex');
    return crypto.timingSafeEqual(Buffer.from(calculatedSignature, 'utf8'), Buffer.from(signature, 'utf8'));
}

function handleMessageCreate(data: any) {
  console.log('Pesan baru:', data.d.content);
  // ... logika untuk memproses pesan baru ...
}

function handleReady(data: any) {
    console.log('Bot siap:', data);
    // ... logika untuk memproses event ready ...
}


// ... Tambahkan fungsi handler untuk event lain ...
