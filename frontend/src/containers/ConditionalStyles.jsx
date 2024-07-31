import { useEffect } from 'react';
import bgImage from '../assests/bgblue.jpg'; 
const applyConditionalStyles = () => {
  const currentUrl = window.location.pathname;


  if (currentUrl === '/register') {
   
    document.body.style.background = ''; 
    document.body.style.backgroundImage = `url(${bgImage})`; 
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
  } else {
  
    document.body.style.background = '#87ceeb59';
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.display = '';
    document.body.style.alignItems = '';
    document.body.style.justifyContent = '';
  }
};

export const useConditionalStyles = () => {
  useEffect(() => {
    applyConditionalStyles();
  }, []);
};
