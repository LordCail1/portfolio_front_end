import Image, { StaticImageData } from "next/image"
import ProjectsSectionTitle from "../ProjectsSection/ProjectsSectionTitle/ProjectsSectionTitle"
import ProjectsSectionDescription from "../ProjectsSection/ProjectsSectionDescription/ProjectsSectionDescription"

type Props = {
	alt: string
	src: StaticImageData
	title: string
	description: string
}

/**
 * This component represents a card that display a project
 */
export default function ProjectCard({ src, alt, title, description }: Props) {
	return (
		<article className="m-20 group basis-1/3 cursor-pointer rounded-md p-6 hover:bg-eerie_black">
			<Image
				src={src}
				alt={alt}
				className="mb-6 rounded-md opacity-50 transition group-hover:opacity-100"
			/>
			<ProjectsSectionTitle text={title} />
			<ProjectsSectionDescription text={description} />
		</article>
	)
}
