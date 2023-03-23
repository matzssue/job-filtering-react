import styles from "./JobsContainer.module.scss";
import { useContext } from "react";
import Job from "./Job";
import JobContext from "../../store/job-context";

const JobsContainer = () => {
  const jobCtx = useContext(JobContext);
  console.log(jobCtx);

  const jobList = jobCtx.items.map((job) => {
    return (
      <Job
        key={Date.now()}
        new={styles.new}
        company={styles.company}
        position={styles.position}
        location={styles.location}
        info={styles["element-container-info"]}
        buttons={styles["buttons-container"]}
        companyName={job.company}
        locationName={job.location}
        positionName={job.position}
      />
    );
  });

  return (
    <div className={styles.container}>
      <ul>{jobList}</ul>
    </div>
  );
};
export default JobsContainer;
