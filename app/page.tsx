'use client'
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Iconbox from "./components/Iconbox/Iconbox";
import Skill from "./components/Skill/Skill";
import PortfolioSection from "./components/Protfolio/PortfolioSection";
import ReviewSection from "./components/Review/ReviewSection";
import BlogSection from "./components/Blog/BlogSection";
import Contact from "./components/Contact/Contact";
import data from './HomePageData.json';
import Resume from "./components/Resume/ResumeSection";
import Aos from 'aos';
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";

export type Responsive = {
  breakpoint: number;
  settings: Settings;
}

export type Settings = {
  slidesToShow: number;
  autoplay: boolean;
}

export type SocialData = {
  icon: string;
  title: string;
  link: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData } = data;
  return (
    <>
      {isLoading ? <Preloader /> : (
        <>
          <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
          <About data={aboutData} data-aos="fade-right" />
          <Iconbox data={serviceData} data-aos="fade-right" />
          <Skill data={skillData} data-aos="fade-right" />
          <Resume data={resumeData} />
          <PortfolioSection data={portfolioData} data-aos="fade-right" />
          <ReviewSection data={reviewData} data-aos="fade-right" />
          <BlogSection data={blogData} data-aos="fade-right" />
          <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
        </>
      ) }

    </>
  )
}
