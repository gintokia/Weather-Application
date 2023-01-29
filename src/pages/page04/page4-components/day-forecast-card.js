import styles from "./day-forecast-card-styles.module.css";

const DayForecastCard = ({ day, temp, icon }) => {
	let iconUrl = `https://www.weatherbit.io/static/img/icons/${icon}.png`;

	return (
		<div className={styles.dayForecastCard}>
			<div className={styles.header}>
				<h3>{day}</h3>
			</div>
			<div className={styles.icon}>
				<img
					src={iconUrl}
					alt=""
				/>
			</div>
			<div className={styles.info}>
				<h3>{temp}</h3>
			</div>
		</div>
	);
};

export default DayForecastCard;
