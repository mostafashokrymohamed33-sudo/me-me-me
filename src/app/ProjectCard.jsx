export default function ProjectCard({name,disc,tools,link,url}){
    return(
        <div className="card projectcard">
            <div className="dev">
                <div className="disc">
                    {disc}
                </div>
                <div className="tools">
                    {tools?.map((item,i)=><span key={i}>{item}</span>)}
                </div>
            </div>
            <div className="dev image" style={{backgroundImage:`linear-gradient(rgba(2, 2, 2, 0.64),rgba(0, 0, 0, 0.9),rgb(100,100,100,0)),url(${url})`}}>
                <h2 className="title">
                    {name}
                </h2>
                <a className="go" href={link}>
                    view project
                </a>
            </div>
        </div>
    )
}