import ColoredText from "@/components/ColoredText/ColoredText"

export default function HeroText() {
	return (
		<div className="mb-10 flex flex-col items-center px-6 relative">
			<h1 className="mb-14 inline-block text-center text-4xl md:text-6xl text-white">
				{`Hi, I'm `}
				<ColoredText
					text="Rami"
					className="text-mint_morning"
				/>
			</h1>
			<p className="text-center text-lg md:text-2xl text-american_silver lg:w-2/3">
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
