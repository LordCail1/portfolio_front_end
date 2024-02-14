import Image from "next/image"
import ColoredText from "../ColoredText/ColoredText"
import profilePicture from "@/assets/about-me/profile-picture.jpeg"
import AboutMeSpecialShape from "./AboutMeSpecialShape/AboutMeSpecialShape"

export default function AboutMe() {
	return (
		<section className="relative flex flex-col items-center bg-nero px-10 pb-10 pt-40 ">
			<span className="mb-4 text-base text-american_silver">MY BIO</span>
			<h1 className="mb-12 text-3xl text-american_silver">
				{"About "}
				<ColoredText
					text="me"
					className="text-mint_morning"
				/>
				{"."}
			</h1>

			<div className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-10 gap-y-40">
				<div className="p-10">
					<Image
						src={profilePicture}
						alt="profile picture"
						className="rounded-full border-4 border-solid border-transparent transition hover:border-mint_morning"
					/>
				</div>
				<div className="lg:p-10 px-40">
					<p className="text-xl leading-relaxed text-american_silver">
						Hello! I’m a passionate web developer with a knack for creating seamless, high-performance
						web applications. My journey in the tech world has been driven by my curiosity and my
						eagerness to turn ideas into reality. Specializing in full-stack development, I have honed
						my skills in an array of modern technologies, with a particular love for crafting reactive
						user interfaces and robust backend services.
					</p>
				</div>
				<div className="flex flex-col justify-center lg:p-10 px-40">
					<h1 className="mb-12 text-4xl text-white">Expertise That Delivers</h1>
					<p className="text-xl leading-relaxed text-american_silver">
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
				<div className="relative flex flex-wrap gap-3">
					<div>
						<AboutMeSpecialShape />
						<AboutMeSpecialShape />
						<AboutMeSpecialShape />
					</div>
				</div>
			</div>

			<div></div>
		</section>
	)
}
