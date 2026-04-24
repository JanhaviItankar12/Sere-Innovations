import React from 'react';
import HeroSection from './Component/HeroSection';
import ProblemSection from './Component/ProblemSection';
import SolutionSection from './Component/SolutionSection';
import FeaturesSection from './Component/FeatureSection';
import TrustSection from './Component/TrustSection';
import ReviewsSection from './Component/ReviewsSection';
import AudienceSection from './Component/AudienceSection';
import BenefitsSection from './Component/BenefitsSection';
import CTASection from './Component/CTASection';




const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Problem Section */}
        <section id="problem">
          <ProblemSection />
        </section>

        {/* Solution Section */}
        <section id="solution">
          <SolutionSection />
        </section>

        {/* Features Section */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <BenefitsSection />
        </section>

        {/* Trust / Credibility Section */}
        <section id="trust">
          <TrustSection />
        </section>

        {/* Trust / Credibility Section */}
        <section id="reviews">
          <ReviewsSection/>
        </section>

        {/* Who It Is For / Audience Section */}
        <section id="audience">
          <AudienceSection />
        </section>

        {/* Final CTA Section */}
        <section id="cta">
          <CTASection />
        </section>
      </main>

    
    </div>
  );
};

export default HomePage;