import { NextApiRequest, NextApiResponse } from 'next'

import { CURRENCY, MAX_AMOUNT, MIN_AMOUNT } from '@/utils/stripe-constants'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

const handler = async (req: NextApiRequest,
  res: NextApiResponse) => {
  const { item } = req.body;
  console.log("item? ", item);
  if (req.method === 'POST') {
    const amount: number = item.price;
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        mode: 'payment',
        metadata: {
            images: item.image,
        },
        line_items: [
            {
                price_data: {
                  currency: CURRENCY,
                  product_data: {
                    description: item.description,
                    images: [item.image],
                    name: item.name,
                  },
                  unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            },
        ],
        success_url: `${req.headers.origin}?status=success`,
        cancel_url: `${req.headers.origin}?status=cancelled`,
      }
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)
      console.log("Whaaa checkoutsession, ", checkoutSession)
      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log("error in the try: ", err)
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    console.log("not post")
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
export default handler;