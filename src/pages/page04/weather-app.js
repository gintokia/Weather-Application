import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import DayForecastCard from "./page4-components/day-forecast-card";
import styles from "./weather-app-styles.module.css";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

const { getQuote } = require("generate-quote");

const WeatherApp = () => {
	const [currTemp, setCurrTemp] = useState(0);
	const [currDate, setCurrDate] = useState("");
	const [feelLikeTemp, setFeelLikeTemp] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [prec, setPrec] = useState(0); 
	const [wind, setWind] = useState(0);
	const [highTemp, setHighTemp] = useState(0);
	const [lowTemp, setLowTemp] = useState(0);

	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	const [weekForecastList, setWeekForecastList] = useState([]);
	const [iconUrl, setIconUrl] = useState("");

	const [location, setLocation] = useState("");

	const [quote, setQuote] = useState("");
	const [alertCount, setAlertCount] = useState(0);


	const updateInfo = async () => {

		setQuote(`"${getQuote().text}" - ${getQuote().author}`);
		const weatherApiResponse = await axios.post("/api/weather-info", {
			longitude: long,
			latitude: lat,
		});

		setFeelLikeTemp(Math.round(weatherApiResponse.data.main.feels_like));
		setHumidity(Math.round(weatherApiResponse.data.main.humidity));
		setWind(weatherApiResponse.data.wind.speed);
		setHighTemp(Math.round(weatherApiResponse.data.main.temp_max));
		setLowTemp(Math.round(weatherApiResponse.data.main.temp_min));

		const forecastApiResponse = await axios.post("/api/forecast-info", {
			longitude: long,
			latitude: lat,
		});
		const dayObjArr = forecastApiResponse.data.data;
		setCurrTemp(Math.round(dayObjArr[1].temp));
		setLocation(`${forecastApiResponse.data.city_name}, ${forecastApiResponse.data.country_code}`)
		let dateStr = dayObjArr[1].datetime;
		let year = parseInt(dateStr.slice(0,4));
		let month = parseInt(dateStr.slice(5,7));
		let day = parseInt(dateStr.slice(8,10));
		const dateObj = new Date(Date.UTC(year,month - 1,day));
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const formattedDateString =  dateObj.toLocaleDateString("en-US", options);
		setCurrDate(formattedDateString);
		setIconUrl(`https://www.weatherbit.io/static/img/icons/${dayObjArr[1].weather.icon}.png`)
		setPrec(dayObjArr[1].pop);


		setWeekForecastList(
			dayObjArr.map((dayObj) => {
				let dateStr = dayObj.datetime;
				let year = parseInt(dateStr.slice(0,4));
				let month = parseInt(dateStr.slice(5,7));
				let day = parseInt(dateStr.slice(8,10));
				const dateObj = new Date(Date.UTC(year,month - 1,day));
				const options = {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				};
				const formattedDateString =  dateObj.toLocaleDateString("en-US", options).split(",")[0];


				if (Math.abs(currTemp - dayObj.temp) < 10) {
					return (
						<DayForecastCard
							key={dayObj.temp}
							day={formattedDateString}
							temp={Math.round(dayObj.temp)}
							icon={dayObj.weather.icon}
						></DayForecastCard>
					);
				}
				return null;
			})
		);

	};

	useEffect(() => {
		if (alertCount < 1) {
			toast.info("To allow the application to deliver personalized weather information you must give your browser permission to access your location. Once given the permission, remember to refresh your browser if the content is not showing!", {
				position: toast.POSITION.BOTTOM_LEFT,
				autoClose: 10000,
				draggable: false,
			});
			setAlertCount(alertCount + 1);
		}
		let options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		function success(pos) {
			let crd = pos.coords;
			setLat(crd.latitude);
			setLong(crd.longitude);
		}

		function error(e) {
			console.log(`Geolocation Error: ${e.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);


		updateInfo();
	}, [currTemp]);

	return (
		<div>
			<Helmet>
				<title>Weather Forecast App</title>
				<body style="background-color: #63a4ff; color:white; box-sizing: border-box; height: 100vh; margin: 0; padding: 0"/>
			</Helmet>
			{injectStyle()}
			<ToastContainer style={{ fontSize: '2vh', width: '45vw', fontWeight: 'bold', marginLeft: '20px', marginBottom: '20px' }} transition={Bounce} />
			<div className={styles.mainContainer}>
				<div className={styles.currentWeather}>
					<div className={styles.tempIconLocationDate}>
						<div className={styles.locationStyles}>
							<h3>{location}</h3>
						</div>
						<div className={styles.date}>
							<h3>{currDate}</h3>
						</div>
						<div className={styles.tempIcon}>
							<img src={iconUrl} alt="" />
							<div className={styles.temp}>
								<h2>{currTemp}</h2>
							</div>
						</div>
					</div>
					<div className={styles.extraDataContainer}>
						<div className={styles.data}>
							<div className={styles.extraData}>
								<p className={styles.feelsLike}>
									Feels Like:&nbsp;
									<span className={styles.feelsLikeTemp}>
										{feelLikeTemp}
									</span>
								</p>
								<p className={styles.humidity}>
									Humidity:&nbsp;
									<span className={styles.humValue}>
										{humidity}%
									</span>
								</p>
								<p className={styles.precipitation}>
									Precipitation:&nbsp;
									<span className={styles.precValue}>
										{prec}%
									</span>
								</p>
							</div>
							<div className={styles.extraData}>
								<p className={styles.wind}>
									Wind:&nbsp;
									<span className={styles.windValue}>
										{wind}km/h
									</span>
								</p>
								<p className={styles.high}>
									High:&nbsp;
									<span className={styles.highTempValue}>
										{highTemp}
									</span>
								</p>
								<p className={styles.low}>
									Low:&nbsp;
									<span className={styles.lowTempValue}>
										{lowTemp}
									</span>
								</p>
							</div>
						</div>
						<div className={styles.quote}>
							<h3>Random Quote of the Day:</h3>
							<h4>{quote}</h4>
						</div>
					</div>
				</div>
				<div className={styles.weekForecast}>{weekForecastList}</div>
			</div>
		</div>
	);
};

export default WeatherApp;
