import Footer from "../../components/footer/footer";
import styles from "./page1.module.css";

function Page1() {
	return (
		<div>
			<div className={styles.main}>
				<h1 className={styles.h1Style}>
					About <span className={styles.reactWordHeader}>React</span>{" "}
					and{" "}
					<span className={styles.expressWordHeader}>Express</span>
				</h1>

				<div className={styles.all}>
					<div className={styles.col8}>
						<h2 className={styles.h2Style}>Popularity</h2>
						<div className={styles.reactWord}>React</div>
						<p className={styles.pStyle}>React has been used by:</p>
						<div className={styles.reactPop}>
							<ul>
								<li>Facebook</li>
								<li>Instagram</li>
								<li>Uber Eats</li>
								<li>Discord</li>
								<li>Dropbox</li>
								<li>Salesforce</li>
								<li>Reddit</li>
								<li>...and more multi-page sites</li>
							</ul>
						</div>
						<ul>
							<li>
								Satisfaction rating from 2016–2020 is
								consistently {">"} 85%, being top pick in 2016,
								2017, 2019, and second pick in 2018 and 2020
							</li>
							<li>
								Usage has been highest-rated consistently and
								has been increasing rapidly from ~50% in 2016 to
								~80% in 2020
							</li>
							<li>
								Awareness rating is a consistent 100% across all
								five years
							</li>
							<li>
								React is mostly used for any type of website that requires a user interface that interacts with the client (ecommerce, portfolio, social media)
							</li>
						</ul>
						<h3 className={styles.expressWord}>Express</h3>
						<p className={styles.pStyle}>
							Express has been used by:
						</p>
						<ul>
							<li>Twitter</li>
							<li>Stack Exchange</li>
							<li>Intuit</li>
							<li>PLAID</li>
							<li>...and more e-commerce sites</li>
						</ul>

						<ul>
							<li>
								Based on activity and star rankings for various
								GitHub repositories, Express has maintained a
								relatively high popularity throughout its
								lifespan.
							</li>
							<li>
								Consistently ranked 4th–3rd from Jan 2012–May
								2014, with it being not far behind the 3rd and
								2nd-ranked back-ends
							</li>
							<li>
								Starting around 2016, Express has begun catching
								up to both of the top 2 back-ends, Meteor and
								Ruby on Rails
							</li>
							<li>Express even overtook Meteor by 2018!</li>
							<li>
								As of March 2021, Express is ranked 4th, not too
								far behind the 3rd and 2nd
							</li>
							<li>While Express.js is used mostly to create backend logic for websites, it can also render dynamic pages through routing</li>
						</ul>
					</div>

					<div className={styles.strengthsAndWeakness}>
						<div className={styles.col8}>
							<h2 className={styles.h2Style}>Strengths</h2>
							<h3 className={styles.reactWord}>React</h3>
							<ul>
								<li>Popular</li>
								<li>Promotes reusable code via components</li>
								<li>Easy to learn</li>
								<li>Allows optional use of JSX</li>
							</ul>
							<h3 className={styles.expressWord}>Express</h3>
							<ul>
								<li>
									As a server-side framework based on Node.js,
									it makes Node.js app development much
									quicker
								</li>
								<li>
									Uses JavaScript, allowing easy consistency
									between front-end and back-end
								</li>
								<li>Easy to set up and configure</li>
								<li>
									Supported by a large community of developers
								</li>
							</ul>
						</div>

						<div className={styles.col8}>
							<h2 className={styles.h2Style}>Weaknesses</h2>
							<h3 className={styles.reactWord}>React</h3>
							<ul>
								<li>
									Use of JSX, which may be too complex for
									some developers
								</li>
								<li>
									Covers only the UI-layers of the app,
									nothing more
								</li>
								<li>
									Fast-paced development may make relearning
									often necessary, documentation difficult
								</li>
							</ul>
							<h3 className={styles.expressWord}>Express</h3>
							<ul>
								<li>
									Event-driven call-back nature, which can be
									difficult to understand
								</li>
								<li>
									Can be difficult to maintain code as a
									result
								</li>
								<li>
									Uses middlewares, which can cause several
									client issues
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Page1;
