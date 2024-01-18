import Image from "next/image"
import ColoredText from "../ColoredText/ColoredText"
import SectionDescription from "../SectionDescription/SectionDescription"
import Sectiontitle from "../SectionTitle/SectionTitle"
import profilePicture from "@/assets/about-me/profile-picture.jpeg"
import AboutMeSpecialShape from "./AboutMeSpecialShape/AboutMeSpecialShape"

export default function AboutMe() {
	return (
		<section className="relative flex flex-col items-center bg-nero px-10 pb-10 pt-40 ">
			<Sectiontitle>MY BIO</Sectiontitle>
			<SectionDescription>
				{"About "}
				<ColoredText
					text="me"
					className="text-mint_morning"
				/>
				{"."}
			</SectionDescription>
			<div className="relative grid grid-cols-2 place-items-center gap-x-10 gap-y-40">
				<Image
					src={profilePicture}
					alt="profile picture"
					className="rounded-full border-4 border-solid border-transparent transition hover:border-mint_morning"
				/>
				<p className="p-20 text-xl leading-relaxed text-american_silver">
					Hello! I’m a passionate web developer with a knack for creating seamless, high-performance
					web applications. My journey in the tech world has been driven by my curiosity and my
					eagerness to turn ideas into reality. Specializing in full-stack development, I have honed
					my skills in an array of modern technologies, with a particular love for crafting reactive
					user interfaces and robust backend services.
				</p>
				<div>
					<SectionDescription>Expertise That Delivers</SectionDescription>
					<p className="w-2/3 text-xl leading-relaxed text-american_silver">
						Equipped with a deep understanding of NextJS and React, I build intuitive, dynamic user
						experiences that engage and delight. With the Redux Toolkit, I manage application state
						with precision, ensuring smooth and predictable app behavior. My proficiency in
						TypeScript enhances code quality and scalability, making my projects not just work, but
						excel. The backend is my canvas too, where with NestJS, I architect server-side
						solutions that are structured and efficient. JavaScript, HTML, and CSS are the pillars
						of my work, enabling me to turn complex designs into responsive and accessible web
						pages. Additionally, my expertise with Mongoose and Jest ensures that databases are
						well-integrated and applications are thoroughly tested.
					</p>
				</div>
				<div className="relative flex gap-3 flex-wrap">
					<AboutMeSpecialShape />
					<AboutMeSpecialShape />
					<AboutMeSpecialShape />
					
				</div>
			</div>

			<div></div>
		</section>
	)
}
