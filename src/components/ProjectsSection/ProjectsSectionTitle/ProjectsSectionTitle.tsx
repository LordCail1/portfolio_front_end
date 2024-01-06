type Props = {
	text: string
}

/**
 * This component returns the title of the projects section
 */
export default function ProjectsSectionTitle({ text }: Props) {
	return <h1 className="text-american_silver text-4xl mb-10">{text}</h1>
}
