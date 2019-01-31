import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Thoughts and Impressions</h1>
		<article>
			This is the main idea
		</article>
	</Layout>
)

export default IndexPage
