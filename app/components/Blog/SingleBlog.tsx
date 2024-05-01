'use client'
import Link from 'next/link';
import './Blog.scss';
import { FC } from 'react';

interface ISingleBlogProps {
  element: Information
}

export interface Information {
  imgLink: string
  designation: string
  date: string
  title: string
  href: string
}

const SingleBlog: FC<ISingleBlogProps> = ({ element }) => {
  const { imgLink, title, date, designation, href } = element;
  return (
    <div className={`st-post-single st-style1`}>
      <Link href={href} className="st-post-thumb st-zoom">
        <img src={imgLink} className="st-zoom-in" alt="blog1" />
      </Link>
      <div className="st-post-info">
        <div className="st-post-date">
          By:
          <a href="blog-details.html" className="st-post-author">
            {designation}
          </a>
          <span className="st-post-date-divider">|</span>
          <span className="st-post-publish-date">{date}</span>
        </div>
        <h4 className="st-post-title">
          <Link href={href}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default SingleBlog;
