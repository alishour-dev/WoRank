import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import "@styles/globals.scss"
import Layout from "@components/Layout"
import Loading from "@components/Loading"

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const handleStart = (url) => {
			url !== router.pathname ? setLoading(true) : setLoading(false)
		}
		const handleComplete = (url) => setLoading(false)

		router.events.on("routeChangeStart", handleStart)
		router.events.on("routeChangeComplete", handleComplete)
		router.events.on("routeChangeError", handleComplete)
	}, [router])

	return (
		<Layout>
			{loading && <Loading />}
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
