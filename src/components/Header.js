import '../index.scss'
import { Link } from 'react-scroll';

function Header() {

    const abrirCurriculo = () => {
      const url = process.env.PUBLIC_URL + '/Gustavo Henriques Vieira - Currículo.pdf'; 
      window.open(url, '_blank');
    };

    return(
        <div className='header'>
            <div className='header-left'>
                <h2> ./gustavohnsv </h2>
            </div>
            <div className='header-right'>
                <ul>
                    <li>
                    <Link to="1"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={50}
                    >
                        <span> About me </span>
                    </Link>
                    </li>
                    <li>
                    <Link to="2"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={700}
                        delay={50}
                    >
                        <span> Skills </span>
                    </Link>
                    </li>
                    <li>
                    <Link to="3"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={1000}
                        delay={50}
                    >
                        <span> Github </span>
                    </Link>
                    </li>
                    <li>
                    <Link to="4"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={1500}
                        delay={50}
                    >
                        <span> Contact </span>
                    </Link>
                    </li>
                    <li>
                        <span onClick={abrirCurriculo}> Curriculum </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header