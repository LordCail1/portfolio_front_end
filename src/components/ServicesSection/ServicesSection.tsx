import ColoredText from "../ColoredText/ColoredText"
import SectionDescription from "../SectionDescription/SectionDescription"
import Sectiontitle from "../SectionTitle/SectionTitle"
import ServiceCard from "./ServiceCard/ServiceCard"

/**
 * This component returns the services section
 */
export default function ServicesSection() {
	return (
		<section
			className="relative flex flex-col items-center bg-blue_island text-xs py-20"
			id="services"
		>
			<Sectiontitle>SERVICES</Sectiontitle>
			<SectionDescription>
				{`What`}
				<ColoredText
					text=" I do"
					className="text-mint_morning"
				/>
			</SectionDescription>
			<div className="flex flex-wrap justify-center">
				<ServiceCard
					icon={""}
					title={"Full-Stack Web Development Services"}
					description={
						"Specializing in crafting high-performance, SEO-friendly web applications using React, Next.js, and modern web technologies tailored for startups to enterprise-level clients."
					}
				/>
				<ServiceCard
					icon={""}
					title={"Redux State Management Expertise"}
					description={
						"Offering advanced state management solutions with Redux Toolkit to streamline and maintain the state in complex web applications, enhancing scalability and maintainability."
					}
				/>
				<ServiceCard
					icon={""}
					title={"NestJS Backend Development Services"}
					description={
						"Professional backend integration services using NestJS to create secure, scalable server-side applications with custom database design and cloud service integration."
					}
				/>
				<ServiceCard
					icon={""}
					title={"Jest Automated Testing Solutions"}
					description={
						"Providing comprehensive automated testing services using Jest to deliver bug-free and reliable web applications, ensuring quality with every release."
					}
				/>
				<ServiceCard
					icon={""}
					title={"AI Chatbot Integration Services"}
					description={
						"Enhance your digital product with custom AI Chatbot integrations, leveraging OpenAI's ChatGPT to engage users with intelligent and interactive conversational experiences."
					}
				/>

				<ServiceCard
					icon={""}
					title={"Custom API Integration and Development"}
					description={
						"Tailored API development services to facilitate seamless data exchange, third-party integrations, and extend the functionality of your web applications."
					}
				/>
			</div>
		</section>
	)
}
