function Titles() {
	return (
		<div className="titles-container">
			<h2 id="job-title">
				<span className="title__extra_bold title__color_two fade-in__one">
					Engineering
				</span>{" "}
				<br />
				<span className="fade-in__two">accessible </span>
				<span className="title__extra_bold title__color_one fade-in__three">
					applications
				</span>
				<br></br>
				{/* <span className="title__extra_bold">APIs</span> */}
			</h2>
			<ul>
				<li className="contact-link">
					<a
						title="external link to LinkedIn profile"
						target="_blank"
						href="http://www.linkedin.com/in/matt-lamb-dev"
						rel="noopener noreferrer"
					>
						<figure>
							<i className="devicon-linkedin-plain" />
						</figure>
					</a>
				</li>
				<li
					className="contact-link"
					style={{ height: "50px", width: "50px" }}
				>
					<a
						title="external link to GitHub profile"
						target="_blank"
						href="https://github.com/Polynomial-B"
						rel="noopener noreferrer"
					>
						<figure>
							<i className="devicon-github-original" />
						</figure>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Titles;
