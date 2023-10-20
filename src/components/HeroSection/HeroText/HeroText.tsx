import { cn } from "@/lib/utils"

export default function HeroText() {
	return (
		<div>
			<h1 className="text text-white">
				{`Hi, I am `}
				<ColoredText text="Rami Elbatnigi" />
			</h1>
			<p className="text-american_silver">
				{`A seasoned `}
				<ColoredText text="Frontend Developer" />
				{`transforming ideas into stunning digial
				experiences.`}
			</p>
		</div>
	)
}

type ColoredTextType = {
	text: string
	className?: string
}

function ColoredText({ text, className }: ColoredTextType) {
	return <span className={cn("text-mint_morning", className)}>{text}</span>
}
