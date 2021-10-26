import { useRouter } from "next/router"

const Loading = () => {
	const router = useRouter()

	return (
		<div
			className={`loading ${
				router.pathname === "/" ? "loading-home" : "loading-country"
			}`}
		>
			<div className='ripple-container'>
				<div className='ripple'>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Loading
