import moment from 'moment';
import React, { useState } from 'react';
import Calender from './component/calender';

function App() {
	const [birth, setBirth] = useState(moment().format('YYYY-MM-DD'))
	const [today, setToday] = useState(moment().format('YYYY-MM-DD'))

	const handleTodayChange = (data) => {
		setToday(data)
	}

	function getYearsMonthsDays(date1, date2) {
		const a = moment(date1);
		const b = moment(date2);
		var years = a.diff(b, 'year');
		b.add(years, 'years');

		const noOfDaysInb = b.daysInMonth();
		const noOfDaysIna = a.daysInMonth();
		let months = 0;
		if (noOfDaysInb > noOfDaysIna) {
			months = b.diff(a, "months");
			a.add(months, "months");
		} else {
			months = a.diff(b, 'months');
			b.add(months, 'months');
		}
		var days = a.diff(b, 'days');

		var totalYears = Math.abs(years);
		var totalMonths = Math.abs(months);
		var totalDays = Math.abs(days);

		if (totalMonths == 0 && totalDays == 0 && totalYears > 0) {
			return `Happy Birthday! 🎉 You're ${totalYears} years old!`;
		}

		return `${totalYears} Years ${totalMonths} Months ${totalDays} Days`;
	}

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900">
			<div className="md:w-2/5 w-10/12">
				<h1 className="text-white text-3xl text-center mb-3 font-sans font-semibold">Gearing Ratio Calculator</h1>
				<div className="flex flex-col rounded mx-auto bg-gray-500 px-6 py-8 w-full">
					<Calender onDayChange={handleTodayChange} day={today} label="today"/>
					<Calender onDayChange={handleTodayChange} day={birth} label="birthday"/>
					<h3 className="text-center lg:text-2xl md:text-lg text-base font-semibold text-white">
						{birth.length > 0 && today.length > 0 ? getYearsMonthsDays(birth, today) : ''}
					</h3>
				</div>
			</div>
		</div>
	);
}

export default App;
