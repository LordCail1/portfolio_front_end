import HeroText from "./HeroText/HeroText"
import SocialBtnGroup from "../SocialBtnGroup/SocialBtnGroup"
import Image from "next/image"
import backgroundImage from "@/assets/background.png"

/**
 * This component is the hero section of the website.
 */
export default function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-center py-96 bg-black opacity-[99%]">
			<Image
				src={backgroundImage}
				fill={true}
				alt="Background"
				className="-z-10 opacity-5"
			/>
			<HeroText />
			<SocialBtnGroup />
		</section>
	)
}
