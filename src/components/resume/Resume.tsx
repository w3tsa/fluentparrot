type Props = {};

const Resume = (props: Props) => {
  return (
    <>
      <form>
        <label htmlFor="resume">Paste resume description</label>
        <br />
        <textarea name="resume" id="resume" cols={50} rows={20}></textarea>
      </form>
    </>
  );
};

export default Resume;
