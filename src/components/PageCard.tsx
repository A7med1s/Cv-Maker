import React from 'react';
import { Link } from 'react-router-dom';
type PageCardProps = {
  title: string;
  imageUrl: string;
  link: string;
};

const PageCard: React.FC<PageCardProps> = ({ title, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
       
      </div>
      <div className="px-6 pt-4 pb-2">
        
          <Link to={link} className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue</Link>
        
      </div>
    </div>
  );
};

export default PageCard;