import  { useState, ChangeEvent, useEffect } from 'react';
const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('user-img');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  useEffect(() => {
    if (image) {
      localStorage.setItem('user-img', image);
    }
  }, [image]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='img-uploader-div'>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div className='text-center'>
         
          <img src={image} alt="Uploaded" style={{ maxWidth: '50%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;