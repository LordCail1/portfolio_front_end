type Props = {
	text: string
	className?: string
}

/**
 * This component allows to change some text to blue
 */
export default function ColoredText({ text, className }: Props) {
	return <span className={className}>{text}</span>
}
