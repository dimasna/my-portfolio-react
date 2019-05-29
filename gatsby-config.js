module.exports = {
	siteMetadata: {
		title: 'Dimas Nashiruddin Al Faruq Portfolio',
		author: 'Dimas N AL',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'a Portfolio from a tech enthusiast who love design and code',
		keywords: `Web Design, Web Developer, Front-End Engineer, UI Designer, UX Designer`,
		github: `https://github.com/dimasna`,
		dribbble: 'https://dribbble.com/dimasna',
		linkedin: 'https://www.linkedin.com/in/dimasnal',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'DS. Portfolio',
				short_name: 'DS, Portfolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
