import { PropsWithChildren } from "react"


/**
 * This is a typical section description
 */
export default function SectionDescription({ children }: PropsWithChildren) {
	return <h1 className="mb-12 text-3xl text-american_silver">{children}</h1>
}
