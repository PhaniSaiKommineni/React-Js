import React from 'react'
import Card  from "./components/Card.jsx"


const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "React JS Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "Frontend UI Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "New York, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "5 days ago",
    post: "React JS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "San Francisco, USA"
  }
];

const App = () => {
  return (
      <div className="parent">
        {jobOpenings.map((e,index)=>{
          return <Card key = {index} company = {e.companyName} datePosted = {e.datePosted} post = {e.post} tag1 = {e.tag1} tag2 = {e.tag2} brandLogo = {e.brandLogo} pay = {e.pay} location = {e.location} />
          
        })}
      </div>
  )
}



export default App