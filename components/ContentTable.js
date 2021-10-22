import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"

const ContentTable = ({ countries }) => {
	// console.log(countries)
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
				{countries.map((item, index) => (
					<Link href={`/country/${item.name}`} key={index}>
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
								<p>{item.population}</p>
							</div>
							<div className='row-item'>
								<p>{item.area}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ContentTable
