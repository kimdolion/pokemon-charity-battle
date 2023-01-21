// https://pokeapi.co/api/v2/pokemon/[slug]
// must be id or name
import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '@/utils/sample-data'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${_req.pokemon}`)
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
