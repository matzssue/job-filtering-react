import styles from "./Form.module.scss";
import { useContext, useEffect, useState } from "react";
import JobContext from "../../store/job-context";

const Form = () => {
  const jobCtx = useContext(JobContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    jobCtx.addJob();
    jobCtx.reset();
    console.log(jobCtx);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        required
        value={jobCtx.data.company}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        required
        // value={jobCtx.data.position}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="role">Role:</label>

      <select
        id="role"
        name="role"
        required
        // value={jobCtx.data.role}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      >
        <option value="">--Select an option--</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>
      <label htmlFor="contract">Contract:</label>

      <select
        id="contract"
        name="contract"
        required
        // value={jobCtx.data.contract}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      >
        {" "}
        <option value="">--Select an option--</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        // value={jobCtx.data.location}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="languages">Languages:</label>

      <select
        id="languages"
        name="languages"
        value={jobCtx.data.languages}
        multiple
        required
        onChange={(e) =>
          jobCtx.change(
            e.target.name,
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
      >
        <option value="">--Select an options--</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
      </select>

      <label htmlFor="tools">Tools:</label>
      <input
        type="text"
        id="tools"
        name="tools"
        required
        value={jobCtx.data.tools}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
