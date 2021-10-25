import { useRef, useEffect, useState } from "react"
import { MdClear, MdSearch } from "react-icons/md"

const SearchBar = ({ input, setInput, handleChange }) => {
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
				onChange={handleChange}
				placeholder='Search for country by name, capital or region'
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
