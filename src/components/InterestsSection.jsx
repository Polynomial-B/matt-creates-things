import Interests from "./Interests";

export default function InterestsSection({ isDark }) {
	return (
		<section>
			<h2>Interests</h2>
			<div className="interests">
				<Interests
					text="Producing"
					imageSource="/images/interest-image-three.svg"
					altText="Background, consisting of an imperfect circle with a gradient."
					body="Music using feedback loops, field recordings and synthesisers"
					isDark={isDark}
				/>
				<Interests
					text="Music"
					imageSource="/images/interest-image-one.svg"
					altText="Background, consisting of an imperfect circle with a gradient."
					body="Click here for my current playlist"
					link="https://open.spotify.com/playlist/2CGZ5GkE9lrNpGjcGDySfP?si=lJlREEUhSk2RuODsMRjS7Q"
					isDark={isDark}
				/>
				<Interests
					text="Reading"
					imageSource="/images/interest-image-two.svg"
					altText="Background, consisting of an imperfect circle with a gradient."
					body="'The Dawn of Everything' by David Graeber and David Wengrow"
					isDark={isDark}
				/>
			</div>
		</section>
	);
}
