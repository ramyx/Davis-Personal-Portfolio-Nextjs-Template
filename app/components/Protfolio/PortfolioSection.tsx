'use client'
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { FC, useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

interface IPortfolioSectionPageProps {
  data: PortfolioData;
}

export type PortfolioData = {
  portfolioItems: PortfolioItem[];
}

export type PortfolioItem = {
  imgLink: string;
  imgLinkLg: string;
  title: string;
  subTitle: string;
  effect: string;
  duration: string;
  delay: string;
}

const PortfolioSection: FC<IPortfolioSectionPageProps> = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<(string | number)[]>([]);

  const getData = (imgLink: string, title: string, subTitle: string) => {
    let tempData = [imgLink, title, subTitle];
    setTempData(() => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  // Load Items
  const { portfolioItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    portfolioItems.slice(0, itemsPerPage),
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = portfolioItems.slice(
      currentLength,
      currentLength + itemsPerPage,
    );
    setVisibleItems((prevItems: any) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <Modal img={tempData[1] as string} title={tempData[2] as string} subTitle={tempData[3] as string} modalClose={modalClose} /> : ""}
    </>
  );
};

export default PortfolioSection;


