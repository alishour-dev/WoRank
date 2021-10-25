import Image from "next/image"
//icons
import { FcCurrencyExchange, FcPositiveDynamic } from "react-icons/fc"
import { GiCapitol } from "react-icons/gi"
import { FaPeopleArrows, FaLanguage } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"
import { IoLanguageOutline } from "react-icons/io"
import { FiMap } from "react-icons/fi"

const country = ({ country }) => {
	console.log(country)

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
									<h2>Language(s)</h2>
								</div>
								{typeof [item.languages][0] === "object" && (
									<div className='right'>
										<p>
											{Object.values([item.languages][0]).length > 0
												? Object.values([item.languages][0]).join(", ")
												: "Not Info"}
										</p>
									</div>
								)}
							</div>
							<div className='row'>
								<div className='left'>
									<FcCurrencyExchange className='icon' />
									<h2>Currency</h2>
								</div>
								<div className='right'>
									<p>
										{Object.values(item.currencies).map(
											(i) => `${i.name} ${i.symbol ? `(${i.symbol})` : ""}`
										)}
									</p>
								</div>
							</div>
							<div className='row'>
								<div className='left'>
									<FiMap className='icon' />
									<h2>Region</h2>
								</div>
								<div className='right'>
									<p>
										{item.region && item.region},{" "}
										{item.continents && item.continents}
									</p>
								</div>
							</div>
							<div className='row'>
								<div className='left'>
									<BiCurrentLocation className='icon' />
									<h2>Live location</h2>
								</div>
								<div className='right'>
									<p className='custom'>
										<a
											href={
												item.maps.googleMaps
													? item.maps.googleMaps
													: item.maps.openStreetMaps
											}
											target='_blank'
											rel='noreferrer'
										>
											Click here
										</a>{" "}
									</p>
								</div>
							</div>
							{item.gini && (
								<div className='row'>
									<div className='left'>
										<FcPositiveDynamic className='icon' />
										<h2>Gini ({Object.keys(item.gini)})</h2>
									</div>
									<div className='right'>
										<p>{Object.values(item.gini)}</p>
									</div>
								</div>
							)}
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
