import JobContext from "../../store/job-context";
import { useContext } from "react";

const JobButtons = (props) => {
  const jobCtx = useContext(JobContext);

  const buttonFilterClickHandler = (e) => {
    !jobCtx.filterList.includes(e.target.name) &&
      jobCtx.addFilter(e.target.name);
  };

  const buttons = props.buttonsArray.map((button) => {
    return (
      <button key={button} name={button} onClick={buttonFilterClickHandler}>
        {button}
      </button>
    );
  });
  return <div className={props.buttonStyles}>{buttons}</div>;
};

export default JobButtons;
