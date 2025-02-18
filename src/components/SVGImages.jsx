export function Break({ isDark }) {
	return (
		<svg
			width="100%"
			height="100%"
			id="svg"
			viewBox="0 0 1440 390"
			xmlns="http://www.w3.org/2000/svg"
			className="end__break"
		>
			<defs>
				<linearGradient
					id="gradient"
					x1="50%"
					y1="100%"
					x2="50%"
					y2="0%"
				>
					<stop
						offset="20%"
						stopColor={
							isDark === "dark-mode" ? "#cf79ff" : "0c2c59"
						}
					></stop>
					<stop
						offset={isDark === "dark-mode" ? "75%" : "60%"}
						stopColor={
							isDark === "dark-mode" ? "#85fcea" : "#ae46eb"
						}
					></stop>
				</linearGradient>
			</defs>
			<path
				d="M 0,400 L 0,0 C 24.386715092647137,33.47694069095102 48.77343018529427,66.95388138190204 72,75 C 95.22656981470573,83.04611861809796 117.29299435147001,65.66141516334287 142,95 C 166.70700564853,124.33858483665713 194.05459240882564,200.4004579647265 217,195 C 239.94540759117436,189.5995420352735 258.4886360132275,102.736752977751 280,86 C 301.5113639867725,69.263247022249 325.9908635382644,122.6525301242695 349,138 C 372.0091364617356,153.3474698757305 393.5479098337148,130.65312652517096 423,145 C 452.4520901662852,159.34687347482904 489.81749712687645,210.73496377504674 515,205 C 540.1825028731236,199.26503622495326 553.1821016587796,136.4070183746421 570,122 C 586.8178983412204,107.59298162535791 607.4540962380054,141.63696272638492 635,162 C 662.5459037619946,182.36303727361508 697.0015133891989,189.04513071981813 721,179 C 744.9984866108011,168.95486928018187 758.5398502051995,142.18251439434255 778,115 C 797.4601497948005,87.81748560565747 822.839085790003,60.22481170281172 850,83 C 877.160914209997,105.77518829718828 906.103806634788,178.91823879441057 931,204 C 955.896193365212,229.08176120558943 976.745687670845,206.10223311954607 1004,181 C 1031.254312329155,155.89776688045393 1064.9134426818314,128.67282872740512 1088,136 C 1111.0865573181686,143.32717127259488 1123.6005416018297,185.2064519708334 1142,176 C 1160.3994583981703,166.7935480291666 1184.6843909108497,106.50136338926114 1214,87 C 1243.3156090891503,67.49863661073886 1277.6618947547713,88.788094472122 1303,100 C 1328.3381052452287,111.211905527878 1344.6680300700652,112.34625872225085 1366,94 C 1387.3319699299348,75.65374127774915 1413.6659849649673,37.826870638874574 1440,0 L 1440,400 L 0,400 Z"
				stroke="none"
				strokeWidth="0"
				fill="url(#gradient)"
				fillOpacity="1"
				className="end__break"
			></path>
		</svg>
	);
}
