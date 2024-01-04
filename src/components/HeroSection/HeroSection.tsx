import HeroText from "./HeroText/HeroText"
import SocialBtnGroup from "../SocialBtnGroup/SocialBtnGroup"

/**
 * This component is the hero section of the website.
 */
export default function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-center bg-black py-96">
			<HeroText />
			<SocialBtnGroup />
		</section>
	)
}
