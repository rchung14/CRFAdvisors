import React from 'react'
import '../styles/About.css'
import aboutPhoto from '../assets/room.avif';
import tedPhoto from '../assets/ted.avif';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Clients() {
  const navigate = useNavigate();
  useEffect(() => {
  document.title = "About Us | CRF Advisors, Inc.";

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute(
      "content",
      "Learn about CRF Advisors and our experience providing independent loan review, credit risk analysis, and portfolio advisory services to banks, credit unions, and financial institutions."
    );
  }

  }, []);
    return (
      <main>
        <section className='aboutusimg'>
            <img src={aboutPhoto} alt="Business professional meeting room, awaiting a conference." />
        </section>

        <section className='aboutusintro'>
          <h1>Independent Credit Review & Portfolio Risk Management</h1>
          <p>At CRF Advisors, we provide independent credit risk management, loan review, and portfolio risk assessment services to financial institutions, non-profit organizations, and financial services companies. Our team specializes in commercial loan portfolio credit review, credit risk analysis, asset quality evaluation, and portfolio stress testing to help clients identify potential credit deterioration, strengthen underwriting oversight, and improve regulatory compliance. We assist banks and lenders in evaluating commercial real estate (CRE) and commercial & industrial (C&I) loan portfolios through detailed financial analysis, risk rating validation, covenant compliance review, collateral assessment, and portfolio monitoring. <br/>
          <br />
          Our specialties include Allowance for Loan and Lease Losses (ALLL) methodology implementation and validation in accordance with FFIEC Interagency Guidance, impaired loan valuation, troubled debt restructuring (TDR) analysis, and other real estate owned (OREO) valuation and accounting support. We also assist clients with GAAP and SEC financial reporting requirements, including the preparation and review of 10-K filings, 10-Q filings, financial statements, and related disclosures. CRF Advisors delivers independent credit review, regulatory compliance support, and portfolio risk management solutions designed to help financial institutions enhance asset quality oversight, reduce credit risk exposure, and maintain strong regulatory reporting standards.</p>
        </section>

        <section className='tedsection'>
          <div className='photocontainer'>
            <h2>Meet Our President</h2>
            <div className='tedimg'>
              <img src={tedPhoto} alt="Handsome businessman." />
            </div>
            <h3>Ted Ahn</h3>
          </div>

          <div className='tedtext'>
            <p>Ted Ahn leads credit risk and loan review engagements for CRF Advisors and has more than 20 years of banking and financial services experience, including 9 years in external and internal audit with RSM serving financial institutions ranging from $40 million to $5 billion in assets.
              <br />
              <br />
              Ted's experience includes commercial loan portfolio credit review, ALLL methodology implementation, impaired loan and TDR analysis, OREO valuation, portfolio stress testing, and regulatory compliance review for CRE and C&I loan portfolios. Ted also assists clients with GAAP and SEC financial reporting, including 10-K and 10-Q filings, financial statement disclosures, and credit risk analytical modeling.
            </p>
          </div>
        </section>

        <section className='employees'>
          <h2>meet the team</h2>

          <div className='employeecard'>
            <img src="" alt="" />
            <h3>josh cash, manager</h3>
            <span>josh description</span>
          </div>
          <div className='employeecard'>
            <img src="" alt="" />
            <h3>evan cywinsky, senior credit analyst</h3>
            <span>evan description</span>
          </div>
          <div className='employeecard'>
            <img src="" alt="" />
            <h3>dan kim, senior credit analyst</h3>
            <span>dan description</span>
          </div>
          <div className='employeecard'>
            <img src="" alt="" />
            <h3>ryan chung, credit analyst</h3>
            <span>ryan description</span>
          </div>

          <section className='aboutuscontact'>
            stuff idk
          </section>

        </section>
      </main>
    )
  }