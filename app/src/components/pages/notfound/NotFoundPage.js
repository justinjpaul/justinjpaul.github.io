import Header from '../../shared/Header';


export default function NotFoundPage() {
    const page = 'notfound';

    return <>
        <Header page={page}/>
        <h2 height="90%">Page not found. Check out my pages by clicking on the buttons on the nav bar at the top :)</h2>
    </>
};