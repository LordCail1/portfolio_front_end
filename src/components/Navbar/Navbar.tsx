import { Langar } from "next/font/google"
import Link from "next/link"
import ColoredText from "../ColoredText/ColoredText"

const langar = Langar({
	display: "swap",
	subsets: ["latin"],
	weight: "400",
})

/**
 * The navbar component
 */
export default function Navbar() {
	return (
		<nav className="fixed z-10 flex h-20 w-full items-center bg-black">
			<Link
				className={
					langar.className +
					" ml-12 cursor-pointer text-3xl text-american_silver transition hover:text-american_silver/70"
				}
				href={"/"}
			>
				Rami
				<ColoredText
					text="."
					className="text-mint_morning"
				/>
			</Link>
			<ul className="flex h-20 w-full items-center justify-end gap-6 pr-12">
				<li className="cursor-pointer text-american_silver transition hover:text-american_silver/70">
					<h1>Home</h1>
				</li>
				<li className="cursor-pointer text-american_silver transition hover:text-american_silver/70">
					<h1>Projects</h1>
				</li>
				<li className="cursor-pointer text-american_silver transition hover:text-american_silver/70">
					<h1>Blog</h1>
				</li>
				<li className="cursor-pointer text-american_silver transition hover:text-american_silver/70">
					<h1>Blog</h1>
				</li>
				<li className="cursor-pointer text-american_silver transition hover:text-american_silver/70">
					<h1>Blog</h1>
				</li>
			</ul>
		</nav>
	)
}
