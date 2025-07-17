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
        <section className="w-[70%] text-left">
          <h1 className='text-lg'>Your credit risk decisions shape your future. Ours help shape them.</h1>
          <p>Backed by decades of frontline experience, CRF Advisors brings independent insight to complex loan portfolios.</p>
        </section>
        <section className='trustedbanks'>
          <ul>
            <li>BANK1</li>
            <li>BANK2</li>
            <li>BANK3</li>
          </ul>
        </section>
        <section className='card1'>

        </section>
        <section className='card2'>
          
        </section>
        <section className='card3'>
          
        </section>
      </section>
    </main>
  )
}