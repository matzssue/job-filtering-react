import { v4 as uuidv4 } from "uuid";

import styles from "./JobsContainer.module.scss";
import { useContext } from "react";
import Job from "./Job";
import JobContext from "../../store/job-context";

const JobsContainer = () => {
  const jobCtx = useContext(JobContext);

  let jobs = jobCtx.items;
  if (jobCtx.filterList.length > 0) {
    jobs = jobCtx.items.filter((item) => {
      const array1 = [item.role, item.contract, ...item.languages];
      return jobCtx.filterList.every((filter) => array1.includes(filter));
    });
    console.log(jobs);
  }

  const jobList = jobs.map((job) => {
    const uniqueKey = uuidv4();
    const buttonsArray = [job.role, job.contract, ...job.languages];

    return (
      <Job
        index={job.currentFormIndex}
        key={uniqueKey}
        new={styles.new}
        company={styles.company}
        position={styles.position}
        location={styles.location}
        info={styles["element-container-info"]}
        buttonStyles={styles["buttons-container"]}
        companyName={job.company}
        locationName={job.location}
        positionName={job.position}
        buttonsArray={buttonsArray}
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
