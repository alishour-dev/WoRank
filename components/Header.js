import { useState } from "react"
import { useRouter } from "next/router"
//icons
import { IoArrowBackOutline } from "react-icons/io5"
import { BiWorld } from "react-icons/bi"
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md"

const Header = () => {
	const router = useRouter()
	const [mode, setMode] = useState("light")

	return (
		<header
			style={
				router.pathname === "/"
					? { justifyContent: "space-evenly", padding: "0 8rem" }
					: { justifyContent: "space-between", padding: "0 2rem" }
			}
		>
			{router.pathname !== "/" ? (
				<button onClick={() => router.back()} className='back-btn'>
					<IoArrowBackOutline className='icon' />
					<h2>Back</h2>
				</button>
			) : null}
			<div className='logo'>
				<BiWorld className='icon' />
				<h1>
					Wo<span>Rank</span>
				</h1>
			</div>
			<button className={`mode ${mode === "light" ? "light" : "dark"}`}>
				{mode === "light" ? (
					<MdOutlineLightMode className='icon' />
				) : (
					<MdOutlineNightlight className='icon' />
				)}
			</button>
		</header>
	)
}

export default Header
