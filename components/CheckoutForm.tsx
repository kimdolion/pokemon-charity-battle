import { ChangeEventHandler, FormEventHandler, useState } from 'react'

import getStripe from '@/utils/get-stripe'
import { formatAmountForDisplay, postRequest } from '@/utils/stripe-helpers'
import { AMOUNT_STEP, CURRENCY, MAX_AMOUNT, MIN_AMOUNT } from '@/utils/stripe-constants'
import { PokemonCheckoutProps } from '@/interfaces/pokemon'
import Link from 'next/link'

const CheckoutForm = ({ pokemon, image }: PokemonCheckoutProps) => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    customDonation: Math.round(MIN_AMOUNT / AMOUNT_STEP),
  })

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await postRequest('/api/checkout', {
      item: { pokemon, image, unit_amount: input.customDonation }
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.id,
    })
    console.warn(error.message)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Donation Amount ({formatAmountForDisplay(MIN_AMOUNT, CURRENCY)}-{formatAmountForDisplay(MAX_AMOUNT, CURRENCY)}):
      <input
        className="text-black w-full rounded p-2 my-2"
        name={'customDonation'}
        value={input.customDonation}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step={AMOUNT_STEP}
        onChange={handleInputChange}
      />
      <input
        className="w-full"
        type="range"
        name={'customDonation'}
        value={input.customDonation}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step={AMOUNT_STEP}
        onChange={handleInputChange}
      ></input>
      </label>
      <div className="test-card-notice">Use any of the{' '}
      <Link
        className='hover:underline'
        href="https://stripe.com/docs/testing#cards"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stripe test cards
      </Link>{' '}
      for this demo, e.g.{' '}
      <div className="inline-flex flex-nowrap">
        4242<span></span>4242<span></span>4242<span></span>4242
      </div>
    </div>
      <button
        className="bg-blue-500 p-2 rounded w-full"
        type="submit"
        disabled={loading}
      >
        Donate {formatAmountForDisplay(input.customDonation, CURRENCY)}
      </button>
    </form>
  )
}

export default CheckoutForm