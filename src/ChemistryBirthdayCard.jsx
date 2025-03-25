import React, { useState, useEffect } from 'react';
import { GiMicroscope, GiChemicalTank, GiTestTubes, GiAtomicSlashes } from 'react-icons/gi';
import './FeminineChemistryCard.css';

const FeminineChemistryBirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [formulaVisible, setFormulaVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    const bubbleColors = [
      'rgba(255, 105, 180, 0.7)',
      'rgba(255, 20, 147, 0.7)',
      'rgba(255, 192, 203, 0.7)',
      'rgba(255, 182, 193, 0.7)',
      'rgba(199, 21, 133, 0.7)'
    ];
    
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 25 + 8,
      animationDuration: Math.random() * 8 + 3,
      delay: Math.random() * 5,
      color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
    }));
    setBubbles(newBubbles);
    
    const newSparkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 3,
      animationDuration: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setSparkles(newSparkles);
    
    const timer = setTimeout(() => setShowMessage(true), 1000);
    const formulaTimer = setTimeout(() => setFormulaVisible(true), 2500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(formulaTimer);
    };
  }, []);
  
  return (
    <div className="feminine-card-container">
      <div className="chemistry-icons">
        {/* Placing icons at random positions */}
        <GiChemicalTank className="chemistry-icon random-icon" style={{ top: '20%', left: '10%', fontSize: '2.5rem', color: '#ff69b4' }} />
        <GiTestTubes className="chemistry-icon random-icon" style={{ top: '60%', left: '80%', fontSize: '3rem', color: '#ff1493' }} />
        <GiAtomicSlashes className="chemistry-icon random-icon" style={{ top: '40%', left: '50%', fontSize: '3.5rem', color: '#db7093' }} />
        
        {/* Microscope icon above Happy Birthday */}
        <GiMicroscope className="microscope-icon" style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', fontSize: '4rem', color: '#c71585' }} />
      </div>
      
      {sparkles.map(sparkle => (
        <div key={`sparkle-${sparkle.id}`} className="sparkle" style={{ left: `${sparkle.left}%`, top: `${sparkle.top}%`, width: `${sparkle.size}px`, height: `${sparkle.size}px`, animationDuration: `${sparkle.animationDuration}s`, animationDelay: `${sparkle.delay}s` }} />
      ))}
      
      {bubbles.map(bubble => (
        <div key={`bubble-${bubble.id}`} className="feminine-bubble" style={{ left: `${bubble.left}%`, width: `${bubble.size}px`, height: `${bubble.size}px`, backgroundColor: bubble.color, animationDuration: `${bubble.animationDuration}s`, animationDelay: `${bubble.delay}s` }} />
      ))}
      
      <div className="feminine-birthday-card">
        <div className="flask-container"><div className="flask"><div className="flask-liquid"><div className="liquid-layer pink"></div><div className="liquid-layer purple"></div><div className="liquid-layer blue"></div></div><div className="flask-neck"></div><div className="flask-top"></div><div className="flask-rim-left"></div><div className="flask-rim-right"></div></div></div>
        
        <div className={`feminine-formula-container ${formulaVisible ? 'visible' : ''}`}>
          <div className="feminine-formula">
            <span className="feminine-formula-text">C<sub>60</sub> + <sup>26</sup>Ma + Au + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → </span>
            <span className="feminine-formula-result">Monika + 💖</span>
          </div>
        </div>
        
        <div className={`feminine-message-container ${showMessage ? 'visible' : ''}`}>
          <h1 className="feminine-title">Happy Birthday, Chemitry Queen!</h1>
          <p className="feminine-subtitle">Like noble gases, some bonds are rare and special.<br/>Like chemistry, you create amazing reactions in everyone around you.</p>
          <p className="feminine-main-message">Wishing you a day as brilliant as diamonds,<br/>As sweet as glucose,<br/>And as perfectly balanced as the best solution!</p>
          <p className="feminine-date-message">March 26th - A day when the most extraordinary element was created</p>
          <div className="feminine-element-container"><div className="feminine-periodic-element"><div className="feminine-element-number">26</div><div className="feminine-element-symbol">Bd</div><div className="feminine-element-name">Birthday</div></div></div>
        </div>
      </div>
      
      <div className="feminine-molecule m1">H₂O</div>
      <div className="feminine-molecule m2">C₂H₅OH</div>
      <div className="feminine-molecule m3">O₂</div>
      <div className="feminine-molecule m4">C₆H₁₂O₆</div>
      <div className="feminine-molecule m5">Au</div>
    </div>
  );
};

export default FeminineChemistryBirthdayCard;
