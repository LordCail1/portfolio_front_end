import ColoredText from "../ColoredText/ColoredText"
import ProjectCard from "../ProjectCard/ProjectCard"
import refugeeImage from "@/assets/projects/refugee.png"
import tarotAppImage from "@/assets/projects/tarot-app.png"
import virtualAssistantImage from "@/assets/projects/virtual-assistant.png"

/**
 * This component returns the projects section
 */
export default function ProjectsSection() {
	return (
		<section
			className="relative flex flex-col items-center bg-blue_island pb-10 pt-40 text-xs"
			id="projects"
		>
			<span className="mb-4 text-base text-american_silver">PROJECTS</span>
			<h1 className="mb-12 text-3xl text-american_silver">
				{`Featured`}
				<ColoredText
					text=" Projects"
					className="text-mint_morning"
				/>
				{"."}
			</h1>
			<div className="relative flex flex-wrap justify-center">
				<ProjectCard
					src={refugeeImage}
					alt="Image of a refugee coming into the country"
					title="AI interviewer for Refugees"
					description="This is a refugee app that can help refugees find jobs, housing, and more."
				/>
				<ProjectCard
					src={virtualAssistantImage}
					alt="Image of virtual assistant at work"
					title="Virtual Assistant Website"
					description="This is a virtual assistant that can do a lot of things. It can tell you the weather, play music, tell you a joke, and more."
				/>
				<ProjectCard
					src={tarotAppImage}
					alt="image of tarot cards"
					title="Tarot Reading Web App"
					description="This is a tarot app that can tell you your fortune. It can tell you your past, present, and future."
				/>
			</div>
		</section>
	)
}
