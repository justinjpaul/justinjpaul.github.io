import './header.css';

export default function Header(props) {
    const [about, chess, portfolio, updates] = ['', 'chess', 'portfolio', 'updates'];

    function redirect(page) {
        window.location.href = `/${page}`;
    }


    return <div className="header">
        <div className="header-panel">
            {/* <div className="button-container"> */}
                <button onClick={() => redirect(about)} className="header-button" disabled={props.page===''}><b>About</b></button>
                <button onClick={() => redirect(chess)} className="header-button" disabled={props.page==='chess'}><b>Chess</b></button>
                <button onClick={() => redirect(portfolio)} className="header-button" disabled={props.page==='portfolio'}><b>Portfolio</b></button>
                <button onClick={() => redirect(updates)} className="header-button" disabled={props.page==='updates'}><b>Updates</b></button>
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