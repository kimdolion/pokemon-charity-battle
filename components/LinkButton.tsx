import Link from "next/link"
import { ReactNode } from "react"

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

const LinkButton = ({children, href}: LinkButtonProps) => {

  return (
    <Link href={href}>
      <button className="border border-gray-300 px-4 py-2 rounded w-full hover:bg-slate-50 hover:text-black transition-all">
        {children}
      </button>
    </Link>
  )
}

export default LinkButton