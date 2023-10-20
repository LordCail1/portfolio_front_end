import { cn } from "@/lib/utils"
import { GithubIcon, LucideIcon, Twitter  } from "lucide-react"

/**
 * This is a group for social media buttons
 */
export default function SocialBtnGroup() {
	return (
		<div className="flex">
      <SocialIcon socialIcon={GithubIcon}/>
      <SocialIcon socialIcon={Twitter}/>
		</div>
	)
}

type SocialIconProp = {
	socialIcon: LucideIcon
  className?: string
}
function SocialIcon({ socialIcon: SocialIcon, className }: SocialIconProp) {
	return (
		<SocialIcon className={cn("h-11 w-11 rounded-full p-2 text-white transition hover:bg-white hover:text-black cursor-pointer", className)} />
	)
}
