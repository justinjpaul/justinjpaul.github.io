import './header.css';

export default function Header(props) {
    const [about, chess, projects, blog] = ['', 'chess', 'projects', 'blog'];

    function redirect(page) {
        window.location.href = `/${page}`;
      }


    return <div className="header">
        <div className="header-panel">
            <button onClick={() => redirect(about)} className={(props.page === about ? "on-page": "off-page") + " button"} >About Me</button>
            <button onClick={() => redirect(chess)} className={(props.page === chess ? "on-page": "off-page") + " button"}>Chess</button>
            <button onClick={() => redirect(projects)} className={(props.page === projects ? "on-page": "off-page") + " button"}>Projects</button>
            <button onClick={() => redirect(blog)} className={(props.page === blog ? "on-page": "off-page") + " button"}>Blog</button>
            <div className="button-social">
                <a href="mailto:justpaul@umich.edu"><i className="far fa-envelope fa-lg"></i></a>
            </div>
            <div className="button-social">
                <a href="https://github.com/justinjpaul"><i className="fab fa-github fa-lg"></i></a>
            </div>
            <div className="button-social">
                <a href="https://www.linkedin.com/in/jpaul24/"><i className="fab fa-linkedin fa-lg"></i></a>
            </div>


            {/* <div className="button">
                <div>
                    <a href="mailto:justpaul@umich.edu"><i className="far fa-envelope fa-2x"></i></a>
                    <a href="https://github.com/justinjpaul"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/jpaul24/"><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div> */}
        </div>
    </div>
};