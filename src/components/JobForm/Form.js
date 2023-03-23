import styles from "./Form.module.scss";
import { useContext, useEffect, useState } from "react";
import JobContext from "../../store/job-context";

const Form = () => {
  const jobCtx = useContext(JobContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    jobCtx.addJob();
    jobCtx.reset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={jobCtx.data.company}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={jobCtx.data.position}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        name="role"
        value={jobCtx.data.role}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="contract">Contract:</label>
      <input
        type="text"
        id="contract"
        name="contract"
        value={jobCtx.data.contract}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={jobCtx.data.location}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <label htmlFor="languages">Languages:</label>
      <input
        type="text"
        id="languages"
        name="languages"
        value={jobCtx.data.languages}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />
      <label htmlFor="tools">Tools:</label>
      <input
        type="text"
        id="tools"
        name="tools"
        value={jobCtx.data.tools}
        onChange={(e) => jobCtx.change(e.target.name, e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
