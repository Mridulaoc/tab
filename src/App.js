import { useEffect, useState } from "react";
import "./App.css"
import { FaAngleDoubleRight } from "react-icons/fa";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value,setValue] =useState(0)

  const url = "https://course-api.com/react-tabs-project";

  const getJobs = async () => {
    const response = await fetch(url);
    const jobsData = await response.json();
    console.log(jobsData)
    setJobs(jobsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getJobs()
  },[]) 

  if (isLoading){
    return    <h1>Loading.......</h1>
  }
  const { id, title, company, duties, dates } = jobs[value];
  return (
    <section className="section">
    <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
    </div>
      <div className="container">
        <div classNameName="btn-container">
        {jobs.map((job,index) => {

          return <button className={` ${index===value ? "active" : "btn-company"} `} onClick={()=>setValue(index)}>{job.company}</button>
        })}
        </div>
        <div className="content-container" key={id}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>          
            {duties.map((duty, index) => {
              return (<div className="job-desc" key={index}>
               <FaAngleDoubleRight style={{fontSize:"1.5rem", marginRight:"1.5rem"}}></FaAngleDoubleRight>
                <p>{duty}</p>
                </div>)
            })}
              
               
        </div>
    </div>
    <button className="btn">More Info</button>
</section>
  )
}

export default App;
