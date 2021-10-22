import Image from "next/image"
//icons
import { FcCurrencyExchange, FcPositiveDynamic } from "react-icons/fc"
import { GiCapitol } from "react-icons/gi"
import { FaPeopleArrows, FaLanguage } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"
import { IoLanguageOutline } from "react-icons/io"

const country = ({ country }) => {
	// console.log(country)

	return (
		<>
			{country &&
				country.length > 0 &&
				country.map((item, index) => (
					<div className='country-page' key={index}>
						<div className='top-container'>
							<div className='img-container'>
								<Image
									src={item.flags.png}
									objectFit='cover'
									alt={item.name}
									layout='fill'
								/>
							</div>
							<h1>{item.name.common}</h1>
							<div className='row'>
								<div className='left'>
									<h2>Population</h2>
									<p>{item.population}</p>
								</div>
								<div className='right'>
									<h2>Area</h2>
									<p>{item.area}</p>
								</div>
							</div>
						</div>
						<div className='details-container'>
							<div className='row'>
								<div className='left'>
									<GiCapitol className='icon' />
									<h2>Capital</h2>
								</div>
								<div className='right'>
									<p>{item.capital}</p>
								</div>
							</div>
							<div className='row'>
								<div className='left'>
									<FaLanguage className='icon' />
									<h2>Language</h2>
								</div>
								{typeof [item.languages][0] === "object" && (
									<div className='right'>
										<p>
											{Object.values([item.languages][0]).length > 0
												? Object.values([item.languages][0]).toString()
												: "Not Info"}
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
		</>
	)
}

export default country

export async function getServerSideProps({ params }) {
	const req = await fetch(`https://restcountries.com/v3.1/name/${params.id}`)
	const country = await req.json()

	return {
		props: {
			country,
		},
	}
}

// `https://restcountries.com/v3.1/name/${params.id}?fields=name,area,population`
