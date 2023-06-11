import Header from '../../shared/Header';
import Projects from './Projects';
import "./portfolio.css";
// import GitHubCalendar from 'react-github-calendar'

// function GitDisplay() {
//     return (
//         <>
//             <h1>GitHub Profile</h1>
//             <GitHubCalendar username="justinjpaul"/>
//         </>
//     )
// }


export default function PortfolioPage() {
    const page = 'portfolio';

    return <>
        <Header page={page}/>
        <div className='main-body'>
            {/* <GitDisplay /> */}
            <Projects />
        </div>
    </>
};