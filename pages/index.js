import Meta from "../components/Meta"
import styles from "../styles/Home.module.scss"

export default function Home() {
	return (
		<>
			<Meta
				title='WoRank App'
				description='A modern web app made with Next.js & Sass which ranks countries around the world through different criteria, such as by population, Area square, by location (continent, or area), etc... Data is fetched through an external API, and displayed using latest Next.js functions.'
			/>
			<div className={styles.container}>
				<p>Home Page</p>
			</div>
		</>
	)
}

// export async function getStaticProps() {
// 	const res = await fetch('')
// 	const data = await res.json()
// 	if (!data) {
// 		return {
// 			notFound: true,
// 		}
// 	}

// 	return {
// 		props: { data },
// 	}
// }
