import { useState, useEffect, useRef } from 'react';
import './header.css';

export default function Header(props) {
    const [about, chess, portfolio, updates] = ['', 'chess', 'portfolio', 'updates'];
    const [viewNavDropdown, setViewNavDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                event.target.className !== 'header-button'
              ) {
            setViewNavDropdown(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return <div className="header">
        <div className={`header-panel${viewNavDropdown ? ' extend-header' : ''}`}>
            {/* <div className="button-container"> */}
            <div className='mobile'>
                {<span ref={dropdownRef} className={`button-container-mobile-${viewNavDropdown ? 'hidden' :'open'}`}>
                    <span className={'header-button'} onClick={() => {setViewNavDropdown(true)}}>&#9776;</span>
                </span>}
                <ul className={`button-container-mobile${viewNavDropdown ? ' mobile-dropdown-show' : ''}`}>
                    <li className='nav-button'>
                        <a className={`header-button${props.page === about ? ' disabled-button' : ''}`} href='/'>About</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page === chess ? ' disabled-button' : ''}`} href='/chess'>Chess</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page === portfolio ? ' disabled-button' : ''}`} href='/portfolio'>Portfolio</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page === updates ? ' disabled-button' : ''}`} href='/updates'>Updates</a>
                    </li>
                </ul>
            </div>
            <ul className='button-container'>
                <li className='nav-button'>
                    <a className={`header-button${props.page === about ? ' disabled-button' : ''}`} href='/'>About</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page === chess ? ' disabled-button' : ''}`} href='/chess'>Chess</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page === portfolio ? ' disabled-button' : ''}`} href='/portfolio'>Portfolio</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page === updates ? ' disabled-button' : ''}`} href='/updates'>Updates</a>
                </li>
            </ul>

            <div className="socials">
                <div className="button-social">
                    <a href="mailto:justpaul@umich.edu" target="about:blank"><i className="far fa-envelope fa-lg"></i></a>
                </div>
                <div className="button-social">
                    <a href="https://github.com/justinjpaul" target="about:blank"><i className="fab fa-github fa-lg"></i></a>
                </div>
                <div className="button-social">
                    <a href="https://www.linkedin.com/in/jpaul24/" target="about:blank"><i className="fab fa-linkedin fa-lg"></i></a>
                </div>
            </div>
        </div>
    </div>
};