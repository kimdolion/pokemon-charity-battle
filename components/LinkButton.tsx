import Link from "next/link"
import { ReactNode } from "react"

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

const LinkButton = ({children, href}: LinkButtonProps) => {

  return (
    <button className="border border-gray-300 px-4 py-2 rounded w-full hover:bg-slate-50 hover:text-black transition-all">
      <Link href={href}>
        {children}
        </Link>
    </button>
  )
}

export default LinkButton