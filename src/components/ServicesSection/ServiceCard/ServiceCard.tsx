"use client"
import { Variants, motion } from "framer-motion"
import { ReactNode, useState } from "react"

type Props = {
	description: string
	text: string
	title: ReactNode
}

/**
 * Those are the cards that contain the different services
 */
export default function ServiceCard({ description, text, title }: Props) {
	const [isHovered, setIsHovered] = useState(false)

	const horizontalVariant: Variants = {
		hidden: {
			width: 0,
		},
		visible: {
			width: "100%",
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	}

	const verticalVariant: Variants = {
		hidden: {
			height: 0,
		},
		visible: {
			height: "100%",
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	}

	return (
		<motion.article
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className={
				"group relative grid lg:w-2/3 gap-10 2sm:gap-0 grid-rows-4 2sm:grid-rows-3 items-start px-10 py-40 transition hover:bg-blue_island_hover py-16 2sm:py-32 sm:px-20 md:px-40 lg:px-20 xl:w-1/2 xl:p-32 2xl:w-auto 2xl:px-40"
			}
		>
			<figure>
				<h1 className="text-center text-4xl leading-relaxed text-american_silver group-hover:text-white sm:text-left">
					{title}
				</h1>
			</figure>
			<h3 className="text-2xl font-extralight text-american_silver sm:text-left text-center">{description}</h3>
			<p className="min-h-[160px] text-center text-base leading-loose md:row-span-1 row-span-2 text-american_silver sm:text-left">
				{text}
			</p>
			<motion.div
				animate={isHovered ? "visible" : "hidden"}
				className="absolute bottom-0 left-0 h-[1px] bg-mint_morning"
				id="bottom"
				variants={horizontalVariant}
			/>
			<motion.div
				animate={isHovered ? "visible" : "hidden"}
				className="absolute bottom-0 right-0 w-[1px] bg-mint_morning"
				id="right"
				variants={verticalVariant}
			/>
			<motion.div
				id="top"
				animate={isHovered ? "visible" : "hidden"}
				className="absolute right-0 top-0 h-[1px] bg-mint_morning"
				variants={horizontalVariant}
			/>
			<motion.div
				id="left"
				animate={isHovered ? "visible" : "hidden"}
				className="absolute left-0 top-0 w-[1px] bg-mint_morning"
				variants={verticalVariant}
			/>
		</motion.article>
	)
}
