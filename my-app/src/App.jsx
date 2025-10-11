import { useState } from 'react'
import './App.css'

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuItems = ['projects', 'contactme', 'info'];

  const handleClick = (item) => {
    console.log("Clicked:", item);
    // Add your navigation logic here
  };

  const getTransform = (item, isActive) => {
    if (!isActive) return '';

    const transforms = {
      projects: 'scale(130%) rotate(-20deg) translate(56px, 20px)',
      contactme: 'scale(130%) rotate(-12deg) translate(46px, 16px)',
      info: 'scale(130%) rotate(-8deg) translate(70px, 8px)'
    };

    return transforms[item] || '';
  };

  return (
    <div className='container'>
      {menuItems.map((item, index) => (
        <div 
          className="text" 
          key={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(item)}
        >
          <span 
            id={`m_${item}`}
            style={{
              transform: getTransform(item, hoveredIndex === index),
              zIndex: hoveredIndex === index ? '2' : '',
              color: hoveredIndex === index ? 'black' : ''
            }}
          >
            {item === 'contactme' ? 'CONTACT-ME' : item.toUpperCase()}
          </span>
          <div 
            id={`t_${item}`}
            style={{ opacity: hoveredIndex === index ? '1' : '0' }}
          >
            <span id={`t_${item}ch`}>
              {item === 'contactme' ? 'CONTACT-ME' : item.toUpperCase()}
            </span>
          </div>
          <div 
            id={`t_${item}w`}
            style={{ opacity: hoveredIndex === index ? '1' : '0' }}
          >
            <span id={`t_${item}ch1`}>
              {item === 'contactme' ? 'CONTACT-ME' : item.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
