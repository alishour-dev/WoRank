import Meta from "@components/Meta"
import { useState } from "react"
import SearchBar from "@components/SearchBar"
import ContentTable from "@components/ContentTable"

export default function Home({ countries }) {
	const [input, setInput] = useState("")

	const filteredCountries = countries.filter(
		(country) =>
			country.name.toLowerCase().includes(input) ||
			country.region.toLowerCase().includes(input)
	)

	const handleChange = (e) => {
		e.preventDefault()

		setInput(e.target.value.toLowerCase())
	}

	return (
		<>
			<Meta
				title='Worank App'
				description='A modern web app made with Next.js & Sass which ranks countries around the world through different criteria, such as by population, Area square, by location (continent, or area), etc... Data is fetched through an external API, and displayed using latest Next.js functions.'
			/>
			<div className='container'>
				<SearchBar
					input={input}
					setInput={setInput}
					handleChange={handleChange}
				/>
				<h6 className='heading-title'>Total: {countries.length} countries</h6>
				<ContentTable countries={filteredCountries} />
			</div>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch(
		"https://restcountries.com/v2/all?fields=name,population,area,flags,capital,region"
	)
	const countries = await res.json()

	if (!countries) {
		return {
			notFound: true,
		}
	}

	return {
		props: { countries },
	}
}
