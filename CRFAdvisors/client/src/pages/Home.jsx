import { Container } from 'postcss'
import React from 'react'
import pilotPhoto from '../assets/test.jpg';

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
          <span>Ted Ahn, President <br />CRF Advisors, Inc.</span>
        </section>
      </section>
      <section className='intro'>
        <h1>Your ______</h1>
      </section>
    </main>
  )
}