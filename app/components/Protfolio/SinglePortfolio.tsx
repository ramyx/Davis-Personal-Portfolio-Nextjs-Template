'use client'
import { Icon } from '@iconify/react';
import { FC } from 'react';
import { PortfolioItem } from './PortfolioSection';

interface ISinglePortfolioPageProps {
  data: PortfolioItem;
  getData: (imgLink: string, title: string, subTitle: string) => void
}

const SinglePortfolio: FC<ISinglePortfolioPageProps> = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt="portfolio"  />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SinglePortfolio
