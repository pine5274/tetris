import React, { useState, useEffect } from 'react';
import RiggingValue from './component/riggingValue';

function App() {
	const [span, setSpan] = useState(159);
	const [oarLength, setOarLength] = useState(286);
	const [inboard, setInboard] = useState(88);
	const [gearingRatio, setGearingRation] = useState(0);
	useEffect(() => {
		setGearingRation((oarLength - inboard) / (span/2));
	})
	const handleSpanChange = (data) => {
		setSpan(data);
	}
	const handleOarLengthChange = (data) => {
		setOarLength(data);
	}
	const handleInboardChange = (data) => {
		setInboard(data);
	}

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
			<div className="md:w-2/5 w-10/12">
				<h1 className="text-white text-3xl text-center mb-3 font-sans font-semibold">Gearing Ratio Calculator</h1>
				<div className="flex flex-col rounded mx-auto bg-gray-500 px-6 py-8 w-full">
					<RiggingValue onValueChange={handleSpanChange} value={span} label="Span" />
					<RiggingValue onValueChange={handleOarLengthChange} value={oarLength} label="Oar Length" />
					<RiggingValue onValueChange={handleInboardChange} value={inboard} label="Inboard" />
				</div>
				<h3 className="text-center lg:text-2xl md:text-lg text-base font-semibold text-white">
						Gearing Ration: {gearingRatio}
				</h3>
			</div>
		</div>
	);
}

export default App;
