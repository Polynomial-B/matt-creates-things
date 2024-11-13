import { useEffect, useState, useRef } from "react";

const titlesArray = [
	["JavaScript", " developer"],
	["React.js", " developer"],
	["Full-stack", " engineer"],
	["App", " designer"],
	["Sound", " designer"],
];

function Titles() {
	const [jobItem, setJobItem] = useState(titlesArray[0]);
	const intervalIdRef = useRef(null);
	const currentIndexRef = useRef(0);

	useEffect(() => {
		const updateJobItem = () => {
			currentIndexRef.current =
				(currentIndexRef.current + 1) % titlesArray.length;
			setJobItem(titlesArray[currentIndexRef.current]);
		};

		intervalIdRef.current = setInterval(updateJobItem, 2000);

		return () => {
			clearInterval(intervalIdRef.current);
		};
	}, []);

	return (
		<h2 id="job-title">
			<span id="job-item-one" className="fade-in-out">
				{jobItem[0]}
			</span>
			<span id="job-item-two">{jobItem[1]}</span>
		</h2>
	);
}

export default Titles;
