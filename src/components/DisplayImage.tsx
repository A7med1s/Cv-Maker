
import { useState,useEffect } from "react";
const DisplayImage = () => {
    const [image, setImage] = useState<string | null>(null);
  
    useEffect(() => {
      const storedImage = localStorage.getItem('user-img');
      setImage(storedImage);
    }, []);
  
    return (
      <div>
        {image ? (
          <img src={image}  alt="Profile" className="w-32 h-32 rounded-full" style={{ maxWidth: '100%', height: 'auto' }} />
        ) : (
          <p>none</p>
        )}
      </div>
    );
  };
  
  export default DisplayImage;