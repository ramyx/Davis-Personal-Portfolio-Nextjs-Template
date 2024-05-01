'use client'
import "./Blog.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';
import { FC } from "react";
import { Responsive } from "@/app/page";

interface IBlogPageProps {
  data: BlogData;
}

export type BlogDataInformation = {
  imgLink: string;
  designation: string;
  date?: string;
  title: string;
  href?: string;
}

export type SliderSetting = {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  responsive?: Responsive[];
  dots?: boolean;
}

export type BlogData = {
  useFor: string;
  heroBg?: string;
  sliderSetting: SliderSetting;
  informations?: BlogDataInformation[];
  sliderImages?: SliderImage[];
}

export type SliderImage = {
  imgLink: string;
}

const Blog: FC<IBlogPageProps> = ({ data }) => {
  return (
    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Blogs"} />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <Carousel data={data} />
      </div>
      <div className="st-height-b95 st-height-lg-b75"></div>
    </section>
  )
}

export default Blog
