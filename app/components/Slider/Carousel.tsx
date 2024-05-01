'use client'
import Slider from "react-slick";
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";
import { FC } from "react";
import { BlogData } from "../Blog/BlogSection";

interface ICarouselPageProps {
  data: BlogData ;
}

const Carousel: FC<ICarouselPageProps> = ({ data }) => {
  const { useFor, informations, sliderSetting, sliderImages } = data;

  if (useFor === "blog") {
    return (
      <Slider  {...sliderSetting}>
        {
          informations?.map((element: any, index: number) => (
            <SingleBlog element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "review") {
    return (
      <Slider  {...sliderSetting}>
        {
          informations?.map((element: any, index: number) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {
          sliderImages?.map((item: any, index: number) => (
            <img src={item.imgLink} key={index} alt="" />
          ))
        }
      </Slider>
    )
  } else {
    <Slider {...sliderSetting}>

    </Slider>
  }
}

export default Carousel
