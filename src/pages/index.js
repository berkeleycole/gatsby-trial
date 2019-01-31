import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Just a trial gatsby site</h1>
		<p>I need to experiment</p>
		<hr />
		<h3>Topics</h3>
		<ul>
			<li>Include CI</li>
			<li>Try tests</li>
			<li>Figure out other image rendering techniques</li>
		</ul>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
