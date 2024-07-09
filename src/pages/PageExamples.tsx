import React from 'react';
import PageCard from '../components/PageCard';
import imgOne from '../assets/IMG-20230820-WA0337.jpg'
import imgTwo from '../assets/Capture.jpg'
const PageExamples: React.FC = () => {
  const pages = [
    {
      title: 'Example One',
      imageUrl: imgOne,
      link: '/pdf-one'
    },
    {
      title: 'Example Two',
      imageUrl: imgTwo,
      link: '/pdf-two'
    },
    // {
    //   title: 'Example Three',
    //   // description: 'This is an example of a home page layout.',
    //   imageUrl: imgOne,
    //   link: '/'
    // },
    // Add more page examples as needed
  ];

  return (
   <>
    <div>
        <p className='text-center font-bold text-xl mt-4'>Examples</p>
    <div className="container mx-auto px-4 cards">
      <div className="grid grid-cols-1 ">
        {pages.map((page, index) => (
          <PageCard
            key={index}
            title={page.title}
            imageUrl={page.imageUrl}
            link={page.link}
          />
        ))}
      </div>
    </div>
    <p></p>
    </div>
   </>
  );
};

export default PageExamples;