type Props = {};

const JobDescription = (props: Props) => {
  return (
    <>
      <form>
        <label htmlFor="job">Paste job description</label>
        <br />
        <textarea name="job" id="job" cols={50} rows={20}></textarea>
      </form>
    </>
  );
};

export default JobDescription;
