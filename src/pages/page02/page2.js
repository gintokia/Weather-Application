import Footer from "../../components/footer/footer";
import styles from "./page2.module.css";

function Page2() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.all}>
					<h2 className={styles.h2Style}>
						Installing{" "}
						<span className={styles.reactWordHeader}>React</span>
					</h2>
					<div className={styles.col8}>
						<p className={styles.pStyle}>
							React can be added to a website in various ways,
							from adding it directly to an HTML page or through
							creating a more integrated app; this tutorial will
							handle the latter. Creating a React app and running
							it on your machine can be done in three simple
							commands:
						</p>
						<div className={styles.reactPop}>
							<li>
								<span style={{ fontSize: 20 }}>1.</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npx create-react-app my-app
								</span>
							</li>
							<li>
								<span style={{ fontSize: 20 }}>2.</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									cd my-app
								</span>
							</li>
							<li>
								<span style={{ fontSize: 20 }}>3.</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm start
								</span>
							</li>
							<span
								style={{
									fontWeight: "bold",
								}}
							>
								Once it is ready to deploy, run the
								following in a terminal to deploy to the Netlify hosting service:
							</span>{" "}
							<li>
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm run build
								</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm install -g netlify-cli
								</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									netlfiy deploy
								</span>{" "}
								It will then ask for a folder to deploy into:
								enter the path to the "build" folder produced by
								the "npm run build" command.
							</li>
						</div>
					</div>
					{/* <div className={styles.col4}>

          </div> */}

					<h2 className={styles.h2Style}>
						Installing{" "}
						<span className={styles.expressWordHeader}>
							Express
						</span>
					</h2>
					<div className={styles.col4}></div>
					<div className={styles.col8}>
						<div>
							<p className={styles.pStyle}>
								Express apps can similarly be created and run on
								your machine using simple instructions:
							</p>
							<li>
								<span style={{ fontSize: 20 }}>1.</span> Create
								a working directory to hold the application.
								This can be done with a simple{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									mkdir
								</span>{" "}
								and{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									cd
								</span>{" "}
								operation.
							</li>
							<li>
								<span style={{ fontSize: 20 }}>2.</span> Use the
								command{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm init
								</span>{" "}
								to create a .json package for your application.
								This command prompts you for several other
								parameters; you can hit RETURN to accept the
								defaults for all except for{" "}
								<span style={{ fontFamily: "monospace" }}>
									entry point: (index.js)
								</span>
								, where{" "}
								<span style={{ fontFamily: "monospace" }}>
									index.js
								</span>{" "}
								is whatever you want the file to be named.
							</li>
							<li>
								<span style={{ fontSize: 20 }}>3.</span> Install
								Express into your created directory with the
								command{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm install express --save
								</span>
								. To install it only temporarily, simply replace{" "}
								<span style={{ fontFamily: "monospace" }}>
									--save
								</span>{" "}
								with{" "}
								<span style={{ fontFamily: "monospace" }}>
									--no-save
								</span>
								.
							</li>
							<span
								style={{
									fontWeight: "bold",
								}}
							>
								To deploy the backend, perform the
								following steps to deploy to the Heroku hosting service:
							</span>
							<li>
								<span style={{ fontSize: 20 }}>1.</span> Install
								the Heroku client.{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									npm install -g heroku
								</span>
							</li>
							<li>
								<span style={{ fontSize: 20 }}>2.</span> Log
								into your Heroku account and follow the prompts
								to create a new SSH key if you have not done so
								already.{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ heroku login
								</span>
							</li>
							<li>
								<span style={{ fontSize: 20 }}>3.</span> Use Git
								to clone the repository's source code to your
								local machine.{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ heroku git:clone -a [project name]
								</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ cd [project name]
								</span>
							</li>
							<li>
								<span style={{ fontSize: 20 }}>4.</span> Deploy
								your changes to Heroku using Git.{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ git add .
								</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ git commit -am "make it better"
								</span>{" "}
								<span
									style={{
										fontFamily: "monospace",
										background: "lightgray",
										padding: 5,
									}}
								>
									$ git push heroku main
								</span>
							</li>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Page2;
