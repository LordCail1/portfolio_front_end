type Props = {
	text: string
}

export default function ProjectsSectionDescription({ text }: Props) {
	return <p className="text-american_silver text-lg lg:text-base 2xl:text-lg leading-6">{text}</p>
}
