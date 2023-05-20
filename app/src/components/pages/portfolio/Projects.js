import { useState, useEffect } from 'react'
import GetData from '../../shared/GetData';


function Tag(props, i) {
    return <a href={props.link} target="about:blank" className={`project-tag tag-${props.name}`} key={i}>{props.name}</a>
}

function SingleProjectCard(props, ind) {

    const skills = props.skills.join(", ");
    return (
    <article className="project" key={`${props.name}-${ind}`}>
        <img src={props.img} className="project-image" alt={`project-${props.name}`}></img>
        <h3 style={{"marginBottom":"2px", "marginTop":".25em"}}>{props.name} <i>{props.date}</i></h3>
        <p style={{"marginTop":"0"}}><i>{props.role}</i></p>
        <p>{props.description}</p>
        <p><b>Languages and Skills: </b>{skills}</p>
        <p><b>Learn more:</b></p>
        {props.tags.length > 0 &&
        props.tags.map((tag, i) => {
            return Tag(tag, `${ind}-${i}`);
        })}
    </article>
    )
}


export default function Projects() {
    const url = "/projects.json"
    const [data, setData] = useState([]);

    useEffect(() => {
        GetData({ url, setData });
    }, []);

    return (<>
        <h1>Projects</h1>
        <div className="project-container">
            {data.map( (proj, i) => {
                return SingleProjectCard(proj, i);
            })}
        </div>
    
    </>
    )
}