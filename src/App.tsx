import "./App.css";

// component
import Hero from "./components/hero/Hero";
import JobDescription from "./components/job_description/JobDescription";
import Resume from "./components/resume/Resume";
import UpdatedResume from "./components/updated_resume/UpdatedResume";

function App() {
  return (
    <div className="App">
      <Hero />
      <br />
      <JobDescription />
      <br />
      <Resume />
      <button>Generate</button>
      <br />
      <UpdatedResume />
    </div>
  );
}

export default App;
