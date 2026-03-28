import React from 'react'
import '../styles/Clients.css'
import clientsPhoto from '../assets/handshake.jpg';
import loanPhoto from '../assets/loan.jpg';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Clients() {
  const navigate = useNavigate();
  useEffect(() => {
  document.title = "Clients | CRF Advisors, Inc.";

  }, []);
    return (
      <main>

        <section className='clientimg'>
          <img src={clientsPhoto} alt="Two businessmen in a city street shaking hands." />
        </section>

        <section className='clientsintro'>
          <h1>Clients of CRF Advisors</h1>
          <p>
            CRF Advisors partners with banks, credit unions, and financial institutions seeking independent insight into credit risk and portfolio performance. 
            Our clients rely on us for objective loan review, regulatory support, and detailed credit analysis designed to strengthen risk management practices. 
            By working closely with management teams, we help institutions identify emerging risks, improve credit quality, and maintain confidence with regulators and stakeholders.
          </p>
          <br />
          <p>
            Services provided to our clients include loan portfolio credit reviews, due diligence support, stress testing, and allowance and CECL-related advisory. 
            Each engagement is tailored to the institution’s portfolio composition, risk profile, and regulatory requirements, allowing CRF Advisors to deliver practical insight while maintaining independence and consistency across the review process.
          </p>
          <br />
          <p>
          Our recommendations are designed to strengthen credit administration practices and enhance examination readiness. 
          By identifying risk rating inconsistencies, documentation gaps, and emerging portfolio weaknesses, we help institutions 
          address issues proactively and support management’s position during regulatory and audit review.
          </p>
        </section>

        <section className='clientbody'>
          <div className='clientimg2'>
            <img src={loanPhoto} alt="" />
          </div>
          <section className='clientimgtext'>
            <h2>How We Support Clients</h2>
            <p>Here at CRF Advisors, we work closely with management teams and boards to provide clear, objective insight into portfolio quality, emerging risk, and areas requiring additional attention.</p>
            <p>Our approach emphasizes consistency, transparency, and practical recommendations. By aligning our reviews with each institution’s internal policies and regulatory expectations, we help management strengthen oversight, improve credit monitoring, and maintain confidence in portfolio reporting.</p>
          </section>
        </section>

        <section className='clientlist'>
          <h2>Representative Clients</h2>
          <p>A sample of the institutions served by CRF Advisors.</p>
          <ul className='list'>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
            <li>Franklin Bank <br />Philadelphia, PA</li>
          </ul>
        </section>

      </main>
    )
  }