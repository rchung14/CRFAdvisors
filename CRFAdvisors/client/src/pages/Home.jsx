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
          <h1>Credit Risk & Loan Review Services</h1>
          <p>Your credit risk decisions shape your future. Ours help shape them.</p>
        </section>
      </section>

      <section className="directory">
        <Link to="/" className="loanreview">Loan Review</Link>
        <div className="spacer" />
        <Link to="/" className="duediligence">Due Diligence</Link>
        <div className="spacer" />
        <Link to="/" className="portfolio-stress">Portfolio Stress Testing</Link>
        <div className="spacer" />
        <Link to="/" className="alllmethod">ALLL Methodology & Review</Link>
        <div className="spacer" />
        <Link to="/" className="ceclmodel">CECL Model & Implementation</Link>
      </section>

      <section className="approach">
        <div>
          <h2>Our Approach</h2>
        </div>
        <div className="approachbody">
          <p>
            CRF Advisors delivers independent credit review and asset valuation services designed to reduce portfolio, audit, and reporting risk.
          </p>
          <section className="approachcards">
            <li>
              <h3>Comprehensive Risk Assessment</h3>
              <span>We identify key credit, valuation, and risk rating issues early to support timely reporting and portfolio analysis.</span>
            </li>
            <li>
              <h3>Independent Credit Review</h3>
              <span>We perform independent loan review, credit analysis, and risk rating validation to assess portfolio quality and underwriting standards.</span>
            </li>
            <li>
              <h3>Regulatory Alignment</h3>
              <span>Our reviews support regulatory compliance, audit readiness, and risk management for banks and financial institutions.</span>
            </li>
          </section>
        </div>
      </section>
    </main>
  )
}