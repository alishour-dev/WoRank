import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
	var year = new Date().getFullYear()

	return (
		<footer>
			<p>
				Copyright <AiOutlineCopyrightCircle className='icon' /> {year}
				{"  "}
				<a href='https://iamshour.com' target='_blank' rel='noreferrer'>
					iamshour.
				</a>
				All rights reserved.
			</p>
		</footer>
	)
}

export default Footer
