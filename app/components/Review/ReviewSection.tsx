'use client'
import "./Review.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';
import { FC } from "react";
import { BlogData } from "../Blog/BlogSection";

interface IReviewPageProps {
  data: BlogData;
}

const Review: FC<IReviewPageProps> = ({ data }) => {

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Review" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <Carousel data={data} />
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

export default Review
