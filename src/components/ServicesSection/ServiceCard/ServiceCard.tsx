"use client"
import { Variants, motion } from "framer-motion"
import { ReactNode, useState } from "react"

type Props = {
	title: ReactNode
	description: string
}

/**
 * Those are the cards that contain the different services
 */
export default function ServiceCard({ description, title }: Props) {
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
				"group relative flex-grow basis-full flex-col items-center justify-center px-10 py-10 transition hover:bg-blue_island_hover sm:px-20 md:px-40 md:py-40 lg:px-72 xl:basis-1/2 xl:p-40"
			}
		>
			<figure className="pt-6">
				<h1 className="pb-20 text-center text-4xl text-american_silver group-hover:text-white sm:text-left">
					{title}
				</h1>
			</figure>
			<div className="text-american_silver">
				<hr className="sm:w-1/2" />
				<p className="py-20 text-center text-lg sm:text-left">{description}</p>
			</div>
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
