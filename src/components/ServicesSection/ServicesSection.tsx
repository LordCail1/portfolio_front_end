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
			className="relative flex flex-col items-center bg-blue_island py-20 text-xs"
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
			<div className="flex justify-center gap-12">
				<ServiceCard
					icon={""}
					title={""}
					description={""}
				/>
				<ServiceCard
					icon={""}
					title={""}
					description={""}
				/>
				<ServiceCard
					icon={""}
					title={""}
					description={""}
				/>
			</div>
		</section>
	)
}
