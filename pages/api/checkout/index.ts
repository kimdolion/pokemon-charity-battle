import { NextApiRequest, NextApiResponse } from 'next'

import { CURRENCY, MAX_AMOUNT, MIN_AMOUNT } from '@/utils/stripe-constants'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { item } = req.body
  console.log(req.headers.origin)
  if (req.method === 'POST') {
    const amount: number = item.unit_amount

    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        line_items: [
          {
            price_data: {
              currency: CURRENCY,
              product_data: {
                description: `You're supporting the pokemon: ${item.pokemon.name}. Make sure to use one of Stripe's test cards for this transaction. E.G.: 4242 4242 4242 4242`,
                images: [item.image],
                name: item.pokemon.name,
                metadata: {
                  pokemon: item.pokemon.name,
                  id: item.pokemon.id
                },
              },
              unit_amount: item.unit_amount * 100,
            },
            quantity: 1,
          }
        ],
        mode: 'payment',
        payment_method_types: ['card'],
        submit_type: 'donate',
        success_url: `${req.headers.origin}/pokemon/${item.pokemon.id}/?status=success`,
        cancel_url: `${req.headers.origin}/pokemon/${item.pokemon.id}/?status=cancelled`,
      }

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler;