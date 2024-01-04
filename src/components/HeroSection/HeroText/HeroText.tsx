import ColoredText from "@/components/ColoredText/ColoredText"

export default function HeroText() {
	return (
		<div className="mb-10 flex flex-col items-center">
			<h1 className="text mb-4 inline-block text-6xl text-white">
				{`Hi, I am `}
				<ColoredText text="Rami Elbatnigi" className="text-mint_morning"/>
			</h1>
			<p className="text-2xl text-american_silver">
				{`A seasoned `}
				<ColoredText text="Frontend Developer" className="text-mint_morning"/>
				{`transforming ideas into stunning digial
				experiences.`}
			</p>
		</div>
	)
}
