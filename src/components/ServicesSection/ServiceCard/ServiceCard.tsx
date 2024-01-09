"use client"
import { motion } from "framer-motion"

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
		<article
			className={
				"flex-grow basis-full cursor-pointer flex-col items-center justify-center px-40 lg:px-72 py-40 transition hover:bg-blue_island_hover xl:basis-1/2 xl:p-40"
			}
		>
			<figure className="pt-6">
				<h1 className="pb-20 text-4xl text-white group-hover:text-black">{title}</h1>
			</figure>
			<div className="text-american_silver group-hover:text-black">
				<hr className="w-1/2" />
				<p className="py-20 text-lg ">{description}</p>
			</div>
		</article>
	)
}
