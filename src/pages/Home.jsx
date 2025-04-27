import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="contact">
        <Footer/>
      </section>
    </div>
  )
}

export default Home