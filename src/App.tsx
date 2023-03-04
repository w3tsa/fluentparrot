import "./App.css";

// component
import Hero from "./components/hero/Hero";
import JobDescription from "./components/job_description/JobDescription";
import Resume from "./components/resume/Resume";
import UpdatedResume from "./components/updated_resume/UpdatedResume";
import Header from "./components/header";
import { Container, Divider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Container maxW={"container.lg"}>
        <Header />
        <Divider orientation="horizontal" mt={5} />
        <Hero />
        <JobDescription />
        <Resume />
        <UpdatedResume />
      </Container>
    </div>
  );
}

export default App;
