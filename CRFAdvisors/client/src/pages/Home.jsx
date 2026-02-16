import React from 'react'
import pilotPhoto from '../assets/test.jpg';
import '../styles/Home.css';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className='pilotPhoto'>
        <img src={pilotPhoto} alt="A city skyline" />
        <section className='tedBlurb'>
          <p>
            Based on our experience servicing financial institutions in the Tri-State area, 
            I have found many institutions having trouble classifying, accounting for, and
            valuing troubled credits and assets. In this highly criticized and fragile FI 
            industry, I strongly believe that the credit risk management function is more 
            than just an assertion that a loan is properly classified, but also to evaluate 
            for any potential impairment as well as determine the impact on the Allowance for 
            Loan Losses.
          </p>
          <span>Ted Ahn, President</span>
        </section>
      </section>
      <section className='intro'>
        <section className='hero'>
          <h1>Your credit risk decisions shape your future. Ours help shape them.</h1>
          <p>Backed by decades of frontline experience, CRF Advisors brings independent insight to complex loan portfolios.</p>
        </section>
      </section>
      <div className="spacer" />
      <section className='directory'>
        <section className='loanreview'>
          <Link to="/">LOAN REVIEW</Link>
        </section>
        <div className="spacer" />
        <section className='duediligence'>
          <Link to="/">DUE DILIGENCE</Link>
        </section>
        <div className="spacer" />
        <section className='portfolio-stress'>
          <Link to="/">PORTFOLIO STRESS TESTING</Link>
        </section>
        <div className="spacer" />
        <section className='ALLLmethod'>
          <Link to="/">ALLL METHODOLOGY & REVIEW</Link>
        </section>
        <div className="spacer" />
        <section className='ceclmodel'>
          <Link to="/">CECL MODEL & IMPLEMENTATION</Link>
        </section>
        <div className="spacer" />
      </section>
    </main>
  )
}