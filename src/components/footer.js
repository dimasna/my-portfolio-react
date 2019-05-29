import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<p className="is-size-4">
						This website still on progress
						<Emoji emoji="☕" />
					</p>
					<p className="is-size-4">
						By Dimas N AL{' '}
						<a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
						<a href={data.site.siteMetadata.bulma}>Bulma</a>
					</p>
					
				
				</div>
			</footer>
		)}
	/>
);

export default Footer;
