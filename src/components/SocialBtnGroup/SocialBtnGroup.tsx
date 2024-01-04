import { cn } from "@/lib/utils"
import { Github, LucideIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"

/**
 * This is a group for social media buttons
 */
export default function SocialBtnGroup() {
	return (
		<div className="flex gap-4">
			<Link
				href={"https://github.com/LordCail1"}
				target="_blank"
			>
				<SocialIcon
					size={48}
					socialIcon={Github}
					strokeWidth={2}
				/>
			</Link>
			<Link
				href={"https://www.linkedin.com/in/rami-elbatnigi-836062200/"}
				target="_blank"
			>
				<SocialIcon
					size={48}
					socialIcon={LinkedinIcon}
					strokeWidth={2}
				/>
			</Link>
		</div>
	)
}

type SocialIconProp = {
	socialIcon: LucideIcon
	className?: string
	size?: number | string
	strokeWidth?: number | string
}

function SocialIcon({ socialIcon: SocialIcon, className, size, strokeWidth }: SocialIconProp) {
	return (
		<SocialIcon
			strokeWidth={strokeWidth}
			size={size}
			className={cn(
				"m-2 cursor-pointer rounded-xl p-2 text-white transition hover:bg-white hover:text-black",
				className
			)}
		/>
	)
}
