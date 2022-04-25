import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Shmagity.scss';
import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import {
	SiJavascript,
	SiTypescript,
	SiSass,
	SiExpress,
	SiNodedotjs,
	SiMongodb,
	SiPostgresql,
	SiFirebase,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Animation from '../Home/Animation';
import SDemo from './mp4/marvel.mp4';
import { gsap } from 'gsap';
import Transition from '../Transition/Transition';

function Shmagity() {
	const home = gsap.timeline();
	const homePage = useRef(null);

	useEffect(() => {
		home.from(homePage.current, {
			duration: 0.6,
			skewX: 10,
			x: -100,
			opacity: 0,
		});
	});
	return (
		<>
			<Transition timeline={home} />
			<section className='shmagity-page'>
				<div className='details-nav'>
					<div className='brand'>
						<HashLink to='/'>
							<h1> Justin </h1>
						</HashLink>
					</div>
					<div className='links'>
						<HashLink to='/#projects'>Back to projects</HashLink>
					</div>
				</div>
				<div className='detail-header'>
					<div className='content'>
						<div className='desc'>
							<Animation copy='Marvelverse' role='heading' />
							<p> View Marvel comics and movies. </p>
						</div>
						<img src='../images/marvel-mac.png' alt='' />
					</div>
					<div className='footer-info'>
						<p>
							<span>Context</span> Personal Project
						</p>
					</div>
				</div>
				<section className='detail-overview'>
					<div className='detail-intro'>
						<h1> Introduction</h1>
						<p>
							Marvelverse is a website where Marvel fans can view comic book
							information. Also, they can view movies in the MCU and view
							details for those movies including trailers and post-credit
							scenes.
						</p>
						<p>
							This website was created using
							<span> React, Redux, Javascript, and Sass. </span>
							Since the Marvel api only provides information for comic books and
							characters, I created my own api to store data for the movies.
						</p>

						<a
							href='https://marvelverse.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							Visit Site
						</a>
					</div>
				</section>
				<section className='images'>
					<div className='img'>
						<img src='../images/marvel-1.png' alt='' />
						<p> View Comic books.</p>
					</div>
					<div className='img'>
						<img src='../images/marvel-2.png' alt='' />
						<p> Choose the type of comics to view.</p>
					</div>
					<div className='img'>
						<img src='../images/marvel-3.png' alt='' />
						<p> View MCU movies and their details. </p>
					</div>
				</section>
				<div className='demo-section'>
					<p>Watch the demo and see how it works.</p>

					<video src={SDemo} controls='controls'></video>
				</div>
				<div className='tech-used'>
					<h1> Technologies Used </h1>
					<div className='skills-wrapper'>
						<ul className='frontend'>
							<li className='skill'>
								<DiReact className='skill-icon' /> React
							</li>
							<li className='skill'>
								<SiJavascript className='skill-icon' />
								Javascript
							</li>
							<li className='skill'>
								<SiSass className='skill-icon' /> Sass
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Shmagity;
