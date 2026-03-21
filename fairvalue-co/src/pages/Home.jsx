import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import UrgencySection from '../components/landing/UrgencySection';
import WhyThisMatters from '../components/landing/WhyThisMatters';
import OutcomesTable from '../components/landing/OutcomesTable';
import HowItWorks from '../components/landing/HowItWorks';
import MidPageCTA from '../components/landing/MidPageCTA';
import ServicesDetail from '../components/landing/ServicesDetail';
import InquiryForm from '../components/landing/InquiryForm';
import Compliance from '../components/landing/Compliance';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <UrgencySection />
      <WhyThisMatters />
      <OutcomesTable />
      <HowItWorks />
      <MidPageCTA />
      <ServicesDetail />
      <InquiryForm />
      <Compliance />
      <FinalCTA />
      <Footer />
    </div>
  );
}