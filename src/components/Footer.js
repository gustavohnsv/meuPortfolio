import '../index.scss'
import { useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa";

function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return(
        <div className='footer'>
            <h4> © gustavohnsv. Todos os direitos reservados. </h4>
            {isVisible && (
                <button onClick={scrollToTop}>
                    <FaChevronCircleUp size={20} color='#FFF'/>
                </button>
            )}
        </div>
    )
}

export default Footer