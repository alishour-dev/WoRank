import { useEffect, useState } from "react"
import { useRouter } from "next/router"
//icons
import { IoArrowBackOutline } from "react-icons/io5"
import { BiWorld } from "react-icons/bi"
import { IoIosMoon } from "react-icons/io"
import { MdOutlineLightMode } from "react-icons/md"

const Header = () => {
	const router = useRouter()
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		document.documentElement.setAttribute(
			"data-theme",
			localStorage.getItem("theme")
		)

		setTheme(localStorage.getItem("theme"))
	}, [])

	const saveTheme = (theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	const switchTheme = () => {
		if (theme === "light") {
			saveTheme("dark")
		} else {
			saveTheme("light")
		}
	}

	return (
		<header
			style={
				router.pathname === "/"
					? { justifyContent: "center", padding: "0 8rem" }
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
			<button
				className='theme-btn'
				onClick={switchTheme}
				style={
					router.pathname === "/"
						? { position: "absolute", top: "12px", right: "20px" }
						: null
				}
			>
				{theme === "dark" ? (
					<MdOutlineLightMode className='icon' />
				) : (
					<IoIosMoon className='icon' />
				)}
			</button>
		</header>
	)
}

export default Header
