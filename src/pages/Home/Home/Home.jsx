import React from 'react';
import HeroCards from '../HeroCards/HeroCards';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import SatisfactionBanner from '../SatisfactionBanner/SatisfactionBanner';
import Testimonials from '../Testimonials/Testimonials';
import FAQSection from '../FAQ/FAQSection';

const Home = () => {
    return (
        <div>
            <HeroCards></HeroCards>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <TrustedCompanies></TrustedCompanies>
            <FeaturesSection></FeaturesSection>
            <SatisfactionBanner></SatisfactionBanner>
            <Testimonials></Testimonials>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;