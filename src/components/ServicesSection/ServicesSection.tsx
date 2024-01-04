import ServiceCard from "./ServiceCard/ServiceCard"

/**
 * This component returns the services section
 */
export default function ServicesSection() {
	return (
		<section className="relative flex flex-col items-center bg-nero pt-20 text-xs">
			<span className="mb-4 text-base text-american_silver">{`SERVICES`}</span>
			<h1 className="mb-12 text-3xl text-american_silver">
				{`What`}
				<span className="text-mint_morning">{` I do`}</span>
			</h1>
			<div className="flex justify-center gap-12 pb-72">
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
