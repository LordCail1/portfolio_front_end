"use client"
import { Variants, motion } from "framer-motion"
import { useState } from "react"

type Props = {
	icon: string
	title: string
	description: string
}

/**
 * Those are the cards that contain the different services
 */
export default function ServiceCard({ description, icon, title }: Props) {
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
			onHoverStart={() => {
				console.log(isHovered)
				setIsHovered(true)
			}}
			onHoverEnd={() => {
				console.log(isHovered)
				setIsHovered(false)
			}}
			className={
				"group relative flex-grow basis-full cursor-pointer flex-col items-center justify-center py-40 transition px-10 hover:bg-blue_island_hover sm:px-20 md:px-40 lg:px-72 xl:basis-1/2 xl:p-40"
			}
		>
			<figure className="pt-6">
				<h1 className="text-center sm:text-left pb-20 text-4xl text-american_silver group-hover:text-white">{title}</h1>
			</figure>
			<div className="text-american_silver">
				<hr className="sm:w-1/2" />
				<p className="py-20 text-lg sm:text-left text-center">{description}</p>
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
