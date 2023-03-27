import styles from "./FilterContainer.module.scss";
import { useContext } from "react";
import JobContext from "../../store/job-context";
const FilterContainer = () => {
  const jobCtx = useContext(JobContext);

  const removeFilterHandler = (e) => {
    jobCtx.removeFilter(e.target.name);
    console.log(jobCtx.filterList);
  };
  // console.log(jobCtx.filterList);
  let filters = jobCtx.filterList.map((filter) => {
    return (
      <li key={filter}>
        <button name={filter} onClick={removeFilterHandler}>
          {filter}
        </button>
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
