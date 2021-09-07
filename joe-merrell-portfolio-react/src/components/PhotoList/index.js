import React, { useState } from 'react';
// import image1 from "../../assets/small/commercial/1.jpg";
import Modal from '../Modal';



const PhotoList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Alien Deer',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'Mushrooms',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'Caterpillar',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'Moth',
      category: 'Gallery',
      description: 'Model and render by Joe Merrell',
    },
    {
      name: 'Squid',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'Fruit',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'Dandelions',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },
    {
      name: 'I am the ______.',
      category: 'Gallery',
      description: 'Models and render by Joe Merrell',
    },

  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
         <img
         src={require(`../../assets/images/cg-small/${i}.jpg`).default}
         alt={image.name}
         className="img-thumbnail mx-1"
         onClick={() => toggleModal(image, i)}
         key={image.name}
       />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
