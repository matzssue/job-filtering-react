import styles from "./Form.module.scss";
import { useContext, useEffect, useState } from "react";
import JobContext from "../../store/job-context";

const Form = () => {
  const jobCtx = useContext(JobContext);
  const defInformations = {
    company: "",
    new: true,
    featured: false,
    position: "",
    role: "",
    contract: "",
    location: "",
    languages: [],
    tools: [],
  };

  const [informations, setInformations] = useState(defInformations);

  const submitFormHandler = (e) => {
    e.preventDefault();
    jobCtx.addJob(informations);
    setInformations(defInformations);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        value={informations.company}
        onChange={(e) => setInformations({ company: e.target.value })}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        value={informations.position}
        name="position"
        onChange={(e) => setInformations({ position: e.target.value })}
      />

      <label htmlFor="role">Role:</label>
      <input type="text" id="role" name="role" value={jobCtx.role} />

      <label htmlFor="contract">Contract:</label>
      <input
        type="text"
        id="contract"
        name="contract"
        value={informations.contract}
        onChange={(e) => setInformations({ contract: e.target.value })}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={informations.location}
        onChange={(e) => setInformations({ location: e.target.value })}
      />

      <label htmlFor="languages">Languages:</label>
      <input
        type="text"
        id="languages"
        name="languages"
        value={informations.languages}
        onChange={(e) => setInformations({ languages: e.target.value })}
      />
      <label htmlFor="tools">Tools:</label>
      <input
        type="text"
        id="tools"
        name="tools"
        value={informations.tools}
        onChange={(e) => setInformations({ tools: e.target.value })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
