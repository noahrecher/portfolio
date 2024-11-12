import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				{/* Social Media Icons */}
				<div className="social-icons mb-2">
					<a href="https://github.com/noahrecher" target="_blank" rel="noopener noreferrer" className="mx-2">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
					<a href="https://www.linkedin.com/in/noah-recher-78487124b/" target="_blank" rel="noopener noreferrer" className="mx-2">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
				</div>
				{/* Impressum Text */}
				<small>&copy; 2024 Noah Recher. All rights reserved.
				</small>
			</div>
		</footer>
	);
}