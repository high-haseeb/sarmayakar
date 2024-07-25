"use client";
import "./style.css";
import React, { useState ,useEffect} from 'react';
import Cards from './Cards.js';

function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const delay = 200;
  const [translate, setTranslate] = useState('translate-y-12 opacity-0');
  const [translate_2, setTranslate_2] = useState('translate-y-12 opacity-0');

  useEffect(() => {
    setTimeout(() => {
      setTranslate('translate-y-0 opacity-100');
      setTimeout(() => {
        setTranslate_2('translate-y-0 opacity-100');
      }, delay);
    }, delay);
  }, []);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  const cardData = [
    { id: 1, src: '/images/assets/one.jpeg', name: "Pearl One Court Yard", dis: 'Inprocess' },
    { id: 2, src: '/images/assets/one.jpeg', name: "Pearl One Tower", dis: 'Completed' },
    { id: 3, src: '/images/bahria/town.jpg', name: "ABS Mall", dis: "Under Construction" },
  ];

  return (
    <div className="flex flex-col w-screen h-auto">
      <div className="w-full min-h-screen relative text-white">
        <img src="/images/bahria/town.jpg" alt="loading" className="w-full h-screen object-cover z-0" />
        <div className="w-full absolute bottom-0 flex flex-col text-7xl font-semibold gap-2 px-8 py-16 z-20">
          <div className="overflow-hidden">
            <p className={`transition transform duration-500 ${translate}`}>Our</p>
          </div>
          <div className='overflow-hidden'>
            <p className={`${translate_2} transition transform duration-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400`}>Projects</p>
          </div>
        </div>
        <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10"></div>
      </div>

      <div className="w-screen h-auto flex flex-col justify-center items-center gap-20 pr-3">
        {cardData.map((card) => (
          <Cards
            key={card.id}
            src={card.src}
            name={card.name}
            dis={card.dis}
            isActive={activeCard === card.id}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
