import Navbar from "../Navbar/Navbar";
import SocialBtnGroup from "../SocialBtnGroup/SocialBtnGroup";
import HeroText from "./HeroText/HeroText";

export default function HeroSection() {
	return (
		<section className="relative bg-black h-96 flex justify-center items-center">
			<HeroText/>
			<SocialBtnGroup/>
			

		</section>
	)
}
