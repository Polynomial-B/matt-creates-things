
function Experience({title, dates, list1, list2, list3, list4}) {
	return (
		<>
			<div className="experience-title">{title}</div>
			<div className="experience-date">{dates}</div>
			<div className="experience-body">
                <ul>
                    <li className="experience-list">{`- ${list1}`}</li>
                    <li className="experience-list">{`- ${list2}`}</li>
                    <li className="experience-list">{`- ${list3}`}</li>
					{list4 && <li className="experience-list">{`- ${list4}`}</li>}
                </ul>
            </div>
		</>
	);
}

export default Experience;
