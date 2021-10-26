import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const orderBy = (countries, filterBy, direction) => {
	if (direction === "asc") {
		return [...countries].sort((a, b) => (a[filterBy] > b[filterBy] ? 1 : -1))
	} else if (direction === "desc") {
		return [...countries].sort((a, b) => (a[filterBy] > b[filterBy] ? -1 : 1))
	}

	return countries
}

const ContentTable = ({ countries }) => {
	const [direction, setDirection] = useState("asc")
	const [filterBy, setFilterBy] = useState("name")

	const orderedCountries = orderBy(countries, filterBy, direction)
	const switchDirection = () => {
		direction === "asc" ? setDirection("desc") : setDirection("asc")
	}
	const filterFunction = (filterBy) => {
		setFilterBy(filterBy)
		switchDirection()
	}

	return (
		<div className='table-container'>
			<div className='table-head'>
				<button className='category' onClick={() => filterFunction("name")}>
					<h2>Country</h2>
					{direction === "asc" && filterBy === "name" ? (
						<IoIosArrowDown className='icon' />
					) : (
						<IoIosArrowUp className='icon' />
					)}
				</button>
				<button className='category' onClick={() => filterFunction("area")}>
					<h2>Area</h2>
					{direction === "asc" && filterBy === "area" ? (
						<IoIosArrowDown className='icon' />
					) : (
						<IoIosArrowUp className='icon' />
					)}
				</button>
				<button
					className='category'
					onClick={() => filterFunction("population")}
				>
					<h2>Population</h2>
					{direction === "asc" && filterBy === "population" ? (
						<IoIosArrowDown className='icon' />
					) : (
						<IoIosArrowUp className='icon' />
					)}
				</button>
			</div>
			<div className='rows-container'>
				{orderedCountries.map((item, index) => (
					<Link href={`/country/${item.name}`} key={index} passHref>
						<div className='row'>
							<div className='row-item'>
								<div className='flag'>
									<Image
										src={item.flags.png}
										width={30}
										height={20}
										objectFit='cover'
										alt={item.name}
									/>
								</div>
								<h3>{item.name}</h3>
							</div>
							<div className='row-item'>
								<p>{item.area}</p>
							</div>
							<div className='row-item'>
								<p>{item.population}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ContentTable
