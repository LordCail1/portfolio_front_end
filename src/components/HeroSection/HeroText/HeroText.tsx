import ColoredText from "@/components/ColoredText/ColoredText"

export default function HeroText() {
	return (
		<div className="mb-10 flex flex-col items-center">
			<h1 className="mx-20 mb-14 inline-block text-center text-3xl xsm:text-4xl md:text-6xl text-white">
				{`Hi, I am `}
				<ColoredText
					text="Rami"
					className="text-mint_morning"
				/>
			</h1>
			<p className="mx-20 text-center text-lg md:text-2xl text-american_silver">
				{`A seasoned `}
				<ColoredText
					text="Frontend Developer"
					className="text-mint_morning"
				/>
				{` transforming ideas into stunning digial
				experiences.`}
			</p>
		</div>
	)
}
