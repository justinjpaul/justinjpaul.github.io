import { useState } from 'react';
import './header.css';

export default function Header(props) {
    const [about, chess, portfolio, updates] = ['', 'chess', 'portfolio', 'updates'];
    const [viewNavDropdown, setViewNavDropdown] = useState(false);

    function redirect(page) {
        window.location.href = `/${page}`;
    }


    return <div className="header">
        <div className={`header-panel${viewNavDropdown ? ' extend-header' : ''}`}>
            {/* <div className="button-container"> */}
            <div className='mobile'>
                {<span className={`button-container-mobile-${viewNavDropdown ? 'hidden' :'open'}`}>
                    <a className={'header-button'} onClick={() => {setViewNavDropdown(true); console.log(viewNavDropdown)}}>&#9776;</a>
                </span>}
                <ul className={`button-container-mobile${viewNavDropdown ? ' mobile-dropdown-show' : ''}`}>
                    <li className='nav-button'>
                        <a className={`header-button${props.page == '' ? ' disabled-button' : ''}`} onClick={() => redirect(about)}>About</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page == 'chess' ? ' disabled-button' : ''}`} onClick={() => redirect(chess)}>Chess</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page == 'portfolio' ? ' disabled-button' : ''}`} onClick={() => redirect(portfolio)}>Portfolio</a>
                    </li>
                    <li className='nav-button'>
                        <a className={`header-button${props.page == 'updates' ? ' disabled-button' : ''}`} onClick={() => redirect(updates)}>Updates</a>
                    </li>
                </ul>
            </div>
            <ul className='button-container'>
                <li className='nav-button'>
                    <a className={`header-button${props.page == '' ? ' disabled-button' : ''}`} onClick={() => redirect(about)}>About</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page == 'chess' ? ' disabled-button' : ''}`} onClick={() => redirect(chess)}>Chess</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page == 'portfolio' ? ' disabled-button' : ''}`} onClick={() => redirect(portfolio)}>Portfolio</a>
                </li>
                <li className='nav-button'>
                    <a className={`header-button${props.page == 'updates' ? ' disabled-button' : ''}`} onClick={() => redirect(updates)}>Updates</a>
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
            {/* </div> */}
        </div>
    </div>
};