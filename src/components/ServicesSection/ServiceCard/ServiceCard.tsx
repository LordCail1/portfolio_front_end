import codeSymbol from "@/assets/code-symbol.svg"
import Image from "next/image"

type Props = {
	icon: string
	title: string
	description: string
}

/**
 * Those are the cards that contain the different services
 */
export default function ServiceCard({ description, icon, title }: Props) {
	return (
		<article className="basis-1/4 cursor-pointer flex-col items-center justify-center rounded-xl border border-solid border-mint_morning px-10 transition hover:bg-mint_morning/5">
			<figure className="pt-6">
				<Image
					src={codeSymbol}
					alt=""
					className="py-12"
				/>
				<h1 className="pb-11 text-2xl font-bold text-american_silver group-hover:text-black">
					Test Card
				</h1>
			</figure>
			<div className="text-american_silver group-hover:text-black">
				<hr className="w-1/2 group-hover:border-black" />
				<p className="py-11 text-lg ">
					{`I use my knowledge of various programming language such as HTML5, CSS3, JAVASCRIPT, TAILWIND to build digital solutions for users`}
				</p>
			</div>
		</article>
	)
}
