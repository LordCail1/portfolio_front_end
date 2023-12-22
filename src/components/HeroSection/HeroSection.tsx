import HeroText from "./HeroText/HeroText"
import SocialBtnGroup from "../SocialBtnGroup/SocialBtnGroup"

export default function HeroSection() {
	return (
		<section className="relative flex basis-3/4 flex-col items-center justify-center bg-black py-96">
			<HeroText />
			<SocialBtnGroup />
		</section>
	)
}
