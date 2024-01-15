import Image from "next/image"
import ColoredText from "../ColoredText/ColoredText"
import SectionDescription from "../SectionDescription/SectionDescription"
import Sectiontitle from "../SectionTitle/SectionTitle"
import profilePicture from "@/assets/about-me/profile-picture.jpeg"

export default function AboutMe() {
	return (
		<section className="relative flex flex-col items-center bg-nero pb-10 pt-40 ">
			<Sectiontitle>MY BIO</Sectiontitle>
			<SectionDescription>
				{"About "}
				<ColoredText
					text="me"
					className="text-mint_morning"
				/>
				{"."}
			</SectionDescription>
			<div className="grid grid-cols-2 place-items-center">
				<Image src={profilePicture} alt="profile picture" className="transition rounded-full border-4 border-solid border-transparent hover:border-mint_morning"/>
        <p className="text-white p-20">Hello! I’m a passionate web developer with a knack for creating seamless, high-performance web applications. My journey in the tech world has been driven by my curiosity and my eagerness to turn ideas into reality. Specializing in full-stack development, I have honed my skills in an array of modern technologies, with a particular love for crafting reactive user interfaces and robust backend services.</p>
			</div>
			<div></div>
			<div></div>
		</section>
	)
}
