import Footer from "../../components/footer/footer";
import styles from "./tutorial-styles.module.css";

const Tutorial = () => {
	return (
		<div>
			<div className={styles.mainContainer}>
				<div className={styles.textContainer}>
					<div className={styles.main}>
						<div className={styles.headerContainer}>
							<h1>
								Creating a Weather Application using{" "}
								<span className={styles.reactWord}>React</span>{" "}
								and{" "}
								<span className={styles.expressWord}>
									Express
								</span>
							</h1>
						</div>
						<div className={styles.imgContainer}>
							<img
								src={require("./page3-imgs/demo.png").default}
								alt=""
							/>
						</div>
					</div>
					<section>
						<h3>What we need to do</h3>
						<ul>
							<li>Create our React App</li>
							<li>Get rid of unnecessary files/folders</li>
							<li>Create necessary React components</li>
							<li>
								Style components using CSS Module stylesheets
							</li>
							<li>Lay out the components within the app</li>
						</ul>
					</section>
					<section>
						<h3>Creating our React App</h3>
						<p>
							Let's get started by creating a React application
							for our project. In a directory of your choice, type
							"npx create-react-app weather-app" in your terminal.
							This will generate files/folder and install packages
							required to run your React app.{" "}
						</p>
						<p>
							"weather-app" can be replaced with a name of your
							choice.
						</p>
						<p>
							Once everything has been successfully installed, you
							will see a new directory named "weather-app/". Go
							into this directory by typing "cd weather-app/" in
							your terminal. Then type "npm start" in your
							terminal.{" "}
						</p>
						<p>A new window/tab will open up:</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/react-template.png")
										.default
								}
								alt=""
							/>
						</div>
						<p>This is the default React app template.</p>
					</section>
					<section>
						<h3>File and Code Cleanup</h3>
						<p>
							Now let's take a step back and look at the files
							generating this template. Open your project folder
							in an IDE of your choice. I will be using, and
							recommend highly, Visual Studio Code.
						</p>

						<p>
							Once you open your project folder you will be
							visited with several files and folders:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/boilerplate.png")
										.default
								}
								alt=""
							/>
						</div>
						<p>
							What you are seeing is the boilerplate code for a
							React application. You can basically ignore most of
							it as you will be making most of your changes in the
							"src" folder.
						</p>
						<p>
							In fact, you can delete the following files as they
							are somewhat useless for this project:
						</p>
						<ul>
							<li>App.test.js</li>
							<li>logo.svg</li>
							<li>reportWebVitals.js</li>
							<li>setupTests.js</li>
						</ul>
						<p>
							In the "App.js" file, remove all code inside the
							first "div" tag. Also remove the logo import at the
							top. You should be left with this:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_1.png").default}
								alt=""
							/>
						</div>
						<p>
							Now that we have cleaned up our project a little, we
							can move onto actually talking about React and its
							usefulness to our Weather Application!
						</p>
					</section>

					<section>
						<h3>How React Works (Basics)</h3>
						<p>
							React makes designing user interfaces (UI) simple by
							allowing the developer to divide the interface into
							smaller pieces called "components".
						</p>
						<p>
							A component is essentially a bundle of code
							generating some visual with or without
							functionality. Examples of components could be a
							navbar, sections, or as you will see, a single day
							in a week for something like a weather forecast. In
							most cases, components are appropriate when you
							think they will be used repeatedly throughout a
							page/application, however that does not always have
							to be the case.
						</p>
						<p>
							To make a new component, simply create a new .js
							file with a name of your liking (eg.: navbar.js).
							Then, inside that file, make a JavaScript function
							with a name that will define your component
						</p>
						<p>
							Component names should start with a capital letter.
						</p>
						<p>
							Inside your function, add a return statement. Within
							that return statement, you can start typing some
							HTML.
						</p>
						<p>
							The cool thing about React components is that you
							can write HTML in the return statement while also
							writing logic above the return statement. This is
							much better than creating HTML and JS files and
							working on them separately.
						</p>
						<p>
							React components must have 1 &lt;div&gt; container
							surrounding the entire code.
						</p>
						<p>
							During development, when multiple components are
							used, it is best to keep them in one folder. With
							that in mind, you should create a "components"
							folder inside your src folder to hold all your
							component files.
						</p>
						<p>
							There's a lot more about React that we can talk
							about, but for this project I don't believe they are
							necessary concepts.
						</p>
					</section>
					<section>
						<h3>How we will design our Weather App</h3>
						<p>
							Now that we know a little bit about React and
							components, we can start creating the skeleton of
							our page and styling as we go.
						</p>
						<p>
							Create a "weather-app.js" file inside your src
							folder. This will be a component acting as the main
							container for the app. Initialize this component
							file as instructed in the previous section.
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_2.png").default}
								alt=""
							/>
						</div>
						<p>
							Then, in your App.js file, add your component to the
							return statement:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_3.png").default}
								alt=""
							/>
						</div>
						<p>
							For styling our component, we have many options. For
							this project we will use something called CSS
							Modules which is essentially using locally scoped
							CSS stylesheets. In simpler terms, we will be able
							to style each component with its own private CSS
							stylesheet.
						</p>
						<p>
							You may ask: "isn't that just how CSS works?" Well
							yes, but also no. In React, when you import mulitple
							stylesheets, it treats them as one big global
							stylesheet. This can cause problems as styles from
							different components can interfere with each other.
						</p>
						<p>
							To use CSS modules in this app, create a file named
							"weather-app-styles.module.css". Then, import it
							into the weather-app.js file by adding "import
							styles from "./weather-app-styles.module.css" to the
							top of your weather-app.js file. For selecing divs
							to allow styling in our CSS file, your className
							will have to be in camel case and will have to come
							from the JavaScript object your imported
							(className=&#123;styles.yourClassName&#125;)
						</p>
					</section>
					<section>
						<h3>Designing our Weather App</h3>
						<p>
							When it comes to the layout of the page, you can do
							whatever your creative mind wants to do. In this
							case, I will be using a CSS grid as it allows you to
							split your page into rows and columns, making it
							easier to place your components/HTML elements on the
							page.
						</p>
						<p>
							Also, for any of these divs/components, you can
							style them however you want. I am simply providing
							the barebones styling for a specfic look for the
							app.
						</p>

						<p>
							Start by selecting the HTML and body in your
							stylesheet and giving them these styles.
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_4.png").default}
								alt=""
							/>
						</div>
						<p>
							These get rid of the default margin and padding
							present in pages, stretch the height of the page all
							the way down to the bottom of your screen, and set
							the background colour of the page.
						</p>
						<p>
							You can also add a font to your entire page by
							importing it in your stylesheet. I will be using
							"Noto Sans" which you can get from{" "}
							<a target="_blank" href="https://fonts.google.com">
								Google Fonts.
							</a>
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_5.png").default}
								alt=""
							/>
						</div>

						<p>
							Inside your main container, create 2 divs with
							classNames "current" and "forecast" where "current"
							will have the weather data for the current day and
							"forecast" will have the weather data for the next 7
							days. We will be working inside the "current" div
							for now.
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_6.png").default}
								alt=""
							/>
						</div>
						<p>
							For your main container, give it a CSS grid split
							into two rows:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_7.png").default}
								alt=""
							/>
						</div>
						<p>
							Inside the "current" div, create 2 new divs with
							classNames "currentData" and "extraData" where the
							first will have the current temperature and the
							other will have extra data such as humidity, wind
							speed, probabilty of precipitation, etc. Style the
							"current" div such that it has a grid with 2
							columns, taking up more space in the container it
							resides in:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_8.png").default}
								alt=""
							/>
						</div>
						<p>
							This will put divs "currentData" and "extraData"
							side by side.
						</p>
						<p>
							Inside your "currentData", add 3 divs with
							classNames "location", "date", and "temp" whose
							purpose is self-explanatory. Style "currentData" so
							that it has a grid with 2 rows where the first row
							is for the location and date and the second is for
							the current temperature. You can also add a
							background color seperate from the background color
							of the main cotainer it if you want.
						</p>
						<p>
							You can also add a background hover effect on
							"currentData".
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={require("./page3-imgs/code_9.png").default}
								alt=""
							/>
						</div>
						<p>
							Inside the "location", "date", and "temp" divs, add
							either a h2 or h3 and add some filler text such as
							"Toronto, Ontario" for location, "September 2021"
							for date, or "2 celsius" for temp. Style the
							location, date, and temperature how ever you want. I
							made the font size bold and large while also playing
							around with the margins:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/code_10.png").default
								}
								alt=""
							/>
						</div>

						<p>
							Now moving onto the "extraData" container, style it
							so that it has a 4x4 grid. This will allow us to put
							data into each of its parts and make them equally
							seperate from each other. Just as the "currentData"
							container, add a height and width so that it takes
							up some space in its parent container.
						</p>
						<p>
							Inside the "extraData" container, create 4 divs with
							classNames "feelsLike", "humidity", "windSpeed",
							"precipitation". Add your own filler text/values for
							each of these. For styling, make sure the font size
							is legible and that you are using relative units
							(rem, em, etc.) so that your the size of your text
							depends on something (font-size of body, font-size
							of parent, etc.).
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/code_11.png").default
								}
								alt=""
							/>
						</div>
						<p>
							Now let's move onto the "forecast" div. In this we
							will need to display 7 days worth of imformation.
							Instead of writing out a div for each day, we will
							create and use a reusable DayCard component with
							properties day and the temperature.
						</p>
						<p>
							Inside your components folder (make it inside the
							src folder if you do not have one) create a new
							JavaScript file named dayCard.js. Initialize the
							DayCard component in the same way you iniatilized
							the WeatherApp component (or look at the
							instructions in section "How we will design our
							Weather App"). The only difference this time is the
							use of props "day" and "temperature" within the
							DayCard component
						</p>
						<p>
							Before we start working on this component, we must
							create a new stylesheet named
							"day-card-style.module.css". Create and import this
							file into dayCard.js.
						</p>
						<p>
							Once you are done the component should look
							something like this:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/code_12.png").default
								}
								alt=""
							/>
						</div>
						<p>
							Style the component however you would like. I would
							recommend you make them rectangles (by changing
							height and width) as they will be side by side in
							the app. To display the day and temperature with a
							gap in between you can either use margins, flexbox,
							or grid. I would recommend flexbox or grid as they
							allow the styling to become responsive. The gap
							between elements will dynamically change when the
							page size is shrinking or stretching.
						</p>
						<p>
							Now inside the main div of the DayCard component,
							create 2 divs with classNames "day" and
							"temperature". Inside those divs you can add a h2,
							h3, or h4. You do not need to add filler text as the
							text that will be rendered comes from the props
							passed in the component. So use the props as the
							inner HTML for the h2/h3/h4:
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/code_13.png").default
								}
								alt=""
							/>
						</div>
						<p>
							Once you are done with the DayCard component, head
							back over to your weather-app.js file. Inside the
							"forecast" div, add 7 DayCards. Add a CSS flexbox to
							the "forecast" div as it makes whatever is inside of
							the div responsive to the screen's size. This is
							important as different screen sizes will display
							your Weather App differently.
						</p>
						<p>
							For each DayCard, pass a different day of the week
							and a temperature. You will now see 7 DayCard
							components being displayed. All with different days
							of the week and some temperature.
						</p>
						<div className={styles.sectionImgContainer}>
							<img
								src={
									require("./page3-imgs/code_14.png").default
								}
								alt=""
							/>
						</div>
						<p>
							Congratulations! You have designed the basic layout
							of the Weather App using React. Now of course you
							can add more styles and/or functionality if you
							like, but that would make this tutorial painfully
							long to read and create.
						</p>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Tutorial;
