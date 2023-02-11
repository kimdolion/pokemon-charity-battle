import { SVGProps } from "react"

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.fill}
    height={props.height}
    width={props.width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>linkedin</title>
    <path d="M6.975 20.667H3.117V9.059h3.858zM5.072 3.462a2.011 2.011 0 10-.051 4.012h.026a2.012 2.012 0 10.025-4.012zm4.039 17.205h3.858v-6.482a2.639 2.639 0 01.127-.941 2.111 2.111 0 011.98-1.411c1.4 0 1.955 1.064 1.955 2.625v6.209h3.858v-6.656c0-3.565-1.9-5.225-4.442-5.225A3.828 3.828 0 0012.97 10.7V9.059H9.111c.051 1.089 0 11.609 0 11.609z" />
  </svg>
)

export default LinkedInIcon
