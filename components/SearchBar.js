import { useRef, useEffect, useState } from "react"
import { MdClear, MdSearch } from "react-icons/md"

const SearchBar = ({ input, setInput }) => {
	const [clicked, setClicked] = useState(false)
	const inputRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				setClicked(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [inputRef])

	return (
		<div className='searchbar-container'>
			<input
				type='text'
				value={clicked ? input : ""}
				onChange={(e) => {
					if (clicked) {
						setInput("")
						setInput(e.target.value)
					} else {
						setInput("")
					}
				}}
				placeholder='Search by name, location, language, etc..'
				onClick={() => {
					setClicked(true)
				}}
				ref={inputRef}
			/>
			<button
				onClick={() => {
					if (clicked) {
						setInput("")
						setClicked(false)
					}
				}}
			>
				{clicked ? (
					<MdClear className='icon icon-clear' />
				) : (
					<MdSearch className='icon icon-search' />
				)}
			</button>
		</div>
	)
}

export default SearchBar
