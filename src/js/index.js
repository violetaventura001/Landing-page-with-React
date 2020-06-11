//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

//render your react application
function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Boot Strap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
}

function Carddeck() {
	return (
		<div className="card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/300"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/300"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/300"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/300"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
function Footer(property) {
	return (
		<div className="card-footer bg-dark text-white text-center p-4">
			Copyright &#169; Your Website {property.currentYear}
		</div>
	);
}
ReactDOM.render(
	<>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="card-deck" />
			<Carddeck />
		</div>
		<Footer currentYear={new Date().getFullYear()} />
	</>,
	document.querySelector("#app")
);
