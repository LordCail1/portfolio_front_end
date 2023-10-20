
export default function Navbar() {
	return (
		<nav className="fixed z-10 flex h-20 w-full bg-black items-center">
			<h1 className="text-american_silver transition hover:text-american_silver/70 cursor-pointer ml-12 text-3xl">Rami</h1>
			<ul className="flex h-20 w-full items-center justify-end gap-6 pr-12">
				<li className="text-american_silver transition hover:text-american_silver/70 cursor-pointer">
					<h1>Home</h1>
				</li>
				<li className="text-american_silver transition hover:text-american_silver/70 cursor-pointer">
					<h1>Projects</h1>
				</li>
				<li className="text-american_silver transition hover:text-american_silver/70 cursor-pointer">
					<h1>Blog</h1>
				</li>
				<li className="text-american_silver transition hover:text-american_silver/70 cursor-pointer">
					<h1>Blog</h1>
				</li>
				<li className="text-american_silver transition hover:text-american_silver/70 cursor-pointer">
					<h1>Blog</h1>
				</li>
			</ul>
		
		</nav>
	)
}
