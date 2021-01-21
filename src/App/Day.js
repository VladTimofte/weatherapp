import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			{format(new Date(day), 'eeee, dd LLLL')}
			{list.map((item) => {
				console.log(item);
				return <div key={item?.dt}><hr></hr>Date and Time<br></br>{item?.dt_txt}<br></br><br></br>Temperature:&nbsp;&nbsp;{item?.main?.temp}&nbsp;℃<br></br>Humidity:&nbsp;&nbsp;{item?.main?.humidity}&nbsp;%<br></br>Pressure:&nbsp;&nbsp;{item?.main?.pressure}&nbsp;Pa<hr></hr></div>
			})}
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
