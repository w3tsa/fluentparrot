import { Container, Divider } from "@chakra-ui/react";
import "./App.css";

// component
import Hero from "./components/hero/Hero";
import JobDescription from "./components/job_description";
import Resume from "./components/resume/Resume";
import UpdatedResume from "./components/updated_resume/UpdatedResume";
import Header from "./components/header";
import Footer from "./components/footer";
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
        <Divider orientation="horizontal" mb={5} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
