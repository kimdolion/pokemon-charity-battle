import Layout from '../components/Layout'
import Link from 'next/link'
import { MISSING_POKEMON_SPRITE, SPRITE_IMAGES } from '@/utils/pokemon-constants'
import Image from 'next/image'

const ErrorPage = () => {
  return (
    <Layout title="404: Pokemon Not Found">
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-2xl font-bold'>404: Pokemon Not Found</h1>
        <div className='flex flex-col gap-4 my-4 '>
          <Image src={MISSING_POKEMON_SPRITE} alt={"Missing Pokemon"} height={100} width={100} />
          <Link className="hover:underline" href="/">Return to Home</Link>
        </div>

      </div>
    </Layout>
  )
}

export default ErrorPage
