import { IoIosArrowDown } from "react-icons/io"

const ContentTable = ({ countries }) => {
	console.log(countries)
	return (
		<div className='table-container'>
			<div className='table-head'>
				<button className='category'>
					<h2>Country</h2>
					<IoIosArrowDown className='icon' />
				</button>
				<button className='category'>
					<h2>Area</h2>
					<IoIosArrowDown className='icon' />
				</button>
				<button className='category pop'>
					<h2>Population</h2>
					<IoIosArrowDown className='icon' />
				</button>
			</div>
			<div className='rows-container'>
				{countries.map((country, index) => (
					<div className='row' key={index}>
						<div className='row-item'>
							<h3>{country.name.common}</h3>
						</div>
						<div className='row-item'>
							<p>{country.population}</p>
						</div>
						<div className='row-item'>
							<p>{country.area}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ContentTable
