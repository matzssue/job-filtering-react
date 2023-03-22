import styles from "./JobsContainer.module.scss";
import { useContext } from "react";

import JobContext from "../../store/job-context";

const JobsContainer = (props) => {
  const jobCtx = useContext(JobContext);

  return (
    <div className={styles.container}>
      <ul>
        {jobCtx.items.map((job) => {
          return <li key={job.key}>{job.company}</li>;
        })}
      </ul>
    </div>
  );
};
export default JobsContainer;
