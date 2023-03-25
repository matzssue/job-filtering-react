import styles from "./FilterContainer.module.scss";
import { useContext } from "react";
import JobContext from "../../store/job-context";
const FilterContainer = () => {
  const jobCtx = useContext(JobContext);
  const filters = jobCtx.filterList.map((filter) => {
    return (
      <li key={filter}>
        <button>{filter}</button>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <ul>{filters}</ul>
    </div>
  );
};
export default FilterContainer;
