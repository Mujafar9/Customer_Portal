import React, { useState, useEffect } from 'react';
import './image.css';

// Array of image URLs
const imageUrls = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbCQGjkn5gmidyv9h291aIa1k2BZj-n8gIg3VxgmviHDvgb12R2Vkxiz66g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM58Kb2wq4VgeBPZiPstU68PbUO7D14FLar_L7UYaC1lZo0Vgz4PjDaTrB-A&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-w_UOWix4b_srwQXoCbFe7OhXwktVkN_NW2xUn5ZUHG88BNcX7BLukXSIg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBotvwAmoM_FXfVGHhZWRO1umPuREMDTX0nflrB_sWegMnlQtWEH7sfTv42g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_2JSiYF12PLFuLmJHMnTviPPo9YZuyb0ag&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLNEwTmHcv5sb49ryQ_NaVL6Eli_pbdAXKc6bhIvdLmb--aypXYtSOnl7ew&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFH3ickTrVuxf_zlOZRGCJjmkoEytbXazrWbZvLegtH8AxDo_vh7rWShN0g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IeL2vMMbuRZWDwpwXwuo9hMl6EUOC2okMvQuSVEEr4V3QHy07uO08lyQzQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcNJTcjiToR6dsuMKmqrUhXGghG-K_RGNCr-gJTTf9Q&s'
];

interface ImageGridProps {
  trigger: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ trigger }) => {
  const [shuffledImages, setShuffledImages] = useState(imageUrls);

  useEffect(() => {
    const shuffleImages = () => {
      const shuffled = [...imageUrls].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
    };

    shuffleImages();
    const intervalId = setInterval(shuffleImages, 10000);

    return () => clearInterval(intervalId);
  }, [trigger]);
  
  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {shuffledImages.map((url, index) => (
          <div key={index} className="image-grid-item">
            <img src={url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
