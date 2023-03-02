type Props = {};

const UpdatedResume = (props: Props) => {
  return (
    <>
      <form>
        <label htmlFor="UpdatedResume">Here is your Updated resume</label>
        <br />
        <textarea
          name="UpdatedResume"
          id="UpdatedResume"
          cols={50}
          rows={20}
        ></textarea>
      </form>
    </>
  );
};

export default UpdatedResume;
