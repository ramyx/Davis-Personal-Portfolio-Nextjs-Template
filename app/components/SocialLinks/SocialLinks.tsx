'use client'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { FC, useState } from 'react'
import Link from 'next/link';
import { SocialData } from '@/app/page';

interface ISocialLinksPageProps {
  data: SocialData[]
}

const SocialLinks: FC<ISocialLinksPageProps> = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {data.map((item: any, index: number) => (
        <Link
          href={item.link}
          className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          <span className="st-social-icon"><Icon icon={`fa6-brands:${item.icon}`} /></span>
          <span className="st-icon-name">{item.title}</span>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks;
