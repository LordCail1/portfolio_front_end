import "./globals.css"
import { Langar } from "next/font/google"
import { ReactNode } from "react"
import Navbar from "@/components/Navbar/Navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Rami Elbatnigi",
	description: "Generated by create next app",
}

export type Props = {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<body className="flex flex-col">
				<Navbar />
				{children}
			</body>
		</html>
	)
}
