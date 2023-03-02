import "./Hero.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="container">
      <h1 aria-label="Resume. Analyze. Apply.">
        <div>
          <span className="boujee-text">Resume.</span>
        </div>
        <div className="text-size_md">
          <span>Analyze.</span>
        </div>
        <div className="text-size_sm">
          <span>Apply.</span>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
