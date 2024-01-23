import ColoredText from "../ColoredText/ColoredText"
import ServiceCard from "./ServiceCard/ServiceCard"

/**
 * This component returns the services section
 */
export default function ServicesSection() {
	return (
		<section
			className="relative grid grid-cols-1 justify-items-center bg-blue_island text-xs 2xl:grid-cols-2 2xl:justify-items-stretch"
			id="services"
		>
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
				description="Crafting Cohesive Frontend and Backend Solutions"
				text={
					"Utilize the breadth of my full-stack development skills to create unified web applications. My expertise in developing responsive interfaces with React and Next.js, combined with backend proficiency using NestJS, ensures the delivery of cohesive and scalable solutions that support your business objectives and growth."
				}
			/>
			<ServiceCard
				title={
					<>
						{"State Management "}
						<ColoredText
							text="Redux"
							className="text-mint_morning"
						/>
					</>
				}
				description="Simplifying Complex State with Redux"
				text={
					"Complex applications require robust state management. My advanced proficiency with Redux Toolkit streamlines state logic, enhances performance, and ensures a stable, scalable foundation for React applications."
				}
			/>
			<ServiceCard
				title={
					<>
						{"Backend with "}
						<ColoredText
							text="NestJS"
							className="text-mint_morning"
						/>
					</>
				}
				description="Robust and Scalable Backend Services"
				text={
					"Leverage my specialized skills in NestJS to build reliable backend services that support your application's needs. I prioritize clean, maintainable code and API design that scales with your business."
				}
			/>
			<ServiceCard
				title={
					<>
						{"Automated "}
						<ColoredText
							text="Testing"
							className="text-mint_morning"
						/>
					</>
				}
				description="Ensuring Quality with Comprehensive Testing Strategies"
				text={
					"Quality assurance is key to reliable software. I implement automated testing frameworks like Jest to deliver bug-free code, ensuring a high-quality product with every release."
				}
			/>
			<ServiceCard
				title={
					<>
						<ColoredText
							text="AI-Powered"
							className="text-mint_morning"
						/>
						{" Solutions"}
					</>
				}
				description="Integrating Intelligence with AI and Chatbot Services"
				text={
					"Elevate your digital product with custom AI solutions. I integrate OpenAI's ChatGPT to provide intelligent chatbot interactions, enhancing customer engagement and support with conversational AI."
				}
			/>

			<ServiceCard
				title={
					<>
						<ColoredText
							text="API"
							className="text-mint_morning"
						/>
						{" Integration"}
					</>
				}
				description="Streamlining Connectivity with Custom API Solutions"
				text={
					"In a connected world, seamless integration is crucial. I provide custom API integration services to facilitate smooth data exchange, extend functionality, and enhance the capabilities of your web applications."
				}
			/>
		</section>
	)
}
