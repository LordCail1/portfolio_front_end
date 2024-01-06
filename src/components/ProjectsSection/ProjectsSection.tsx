import ColoredText from "../ColoredText/ColoredText"
import SectionDescription from "../SectionDescription/SectionDescription"
import Sectiontitle from "../SectionTitle/SectionTitle"

export default function ProjectsSection() {
	return (
		<section
			className="relative flex flex-col items-center bg-blue_island py-20 text-xs"
			id="projects"
		>
			<Sectiontitle>PROJECTS</Sectiontitle>
			<SectionDescription>
				{`Featured`}
				<ColoredText
					text=" Projects"
					className="text-mint_morning"
				/>
				{'.'}
			</SectionDescription>
		</section>
	)
}
