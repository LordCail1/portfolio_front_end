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
		<article className={"group grow cursor-pointer p-24 hover:bg-eerie_black xl:basis-1/3"}>
			<Image
				src={src}
				alt={alt}
				className="mb-24 rounded-md opacity-50 transition group-hover:opacity-100 lg:mb-6 m-auto"
			/>
			<ProjectsSectionTitle text={title} />
			<ProjectsSectionDescription text={description} />
		</article>
	)
}
