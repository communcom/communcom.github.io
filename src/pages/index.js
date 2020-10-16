import React from "react"

import Layout from "../components/common/Layout"
import SEO from "../components/seo"
import Footer from "../components/index/Footer"
import TakeLook from "../components/index/TakeLook"
import Advantages from "../components/index/Advantages"
import Hero from "../components/index/Hero"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Advantages />
    <TakeLook />
    <Footer />
  </Layout>
)

export default IndexPage
