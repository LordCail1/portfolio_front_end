import ColoredText from "../ColoredText/ColoredText"
import ServiceCard from "./ServiceCard/ServiceCard"

/**
 * This component returns the services section
 */
export default function ServicesSection() {
	return (
		<section
			className="relative flex flex-col items-center bg-blue_island text-xs"
			id="services"
		>
			<div className="flex flex-wrap justify-center">
				<ServiceCard
					title={
						<>
							<ColoredText
								text="Full-Stack"
								className="text-mint_morning"
							/>
							{" Development"}
						</>
					}
					description={
						"Utilize the breadth of my full-stack development skills to create unified web applications. My expertise in developing responsive interfaces with React and Next.js, combined with backend proficiency using NestJS, ensures the delivery of cohesive and scalable solutions that support your business objectives and growth."
					}
				/>
				<ServiceCard
					title={
						<>
							<ColoredText
								text="Redux"
								className="text-mint_morning"
							/>
							{" State Management Expertise"}
						</>
					}
					description={
						"Offering advanced state management solutions with Redux Toolkit to streamline and maintain the state in complex web applications, enhancing scalability and maintainability."
					}
				/>
				<ServiceCard
					title={
						<>
							<ColoredText
								text="NestJS"
								className="text-mint_morning"
							/>
							{" Backend Development Services"}
						</>
					}
					description={
						"Professional backend integration services using NestJS to create secure, scalable server-side applications with custom database design and cloud service integration."
					}
				/>
				<ServiceCard
					title={
						<>
							<ColoredText
								text="Jest"
								className="text-mint_morning"
							/>
							{" Automated Testing Solutions"}
						</>
					}
					description={
						"Providing comprehensive automated testing services using Jest to deliver bug-free and reliable web applications, ensuring quality with every release."
					}
				/>
				<ServiceCard
					title={
						<>
							<ColoredText
								text="AI Chatbot"
								className="text-mint_morning"
							/>
							{" Integration Services"}
						</>
					}
					description={
						"Enhance your digital product with custom AI Chatbot integrations, leveraging OpenAI's ChatGPT to engage users with intelligent and interactive conversational experiences."
					}
				/>

				<ServiceCard
					title={
						<>
							{"Custom "}
							<ColoredText
								text="API Integration"
								className="text-mint_morning"
							/>
							{" and Development"}
						</>
					}
					description={
						"Tailored API development services to facilitate seamless data exchange, third-party integrations, and extend the functionality of your web applications."
					}
				/>
			</div>
		</section>
	)
}
