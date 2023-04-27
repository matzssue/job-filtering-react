import JobContext from "../../store/job-context";
import React, { useContext } from "react";

const JobButtons = (props) => {
  const jobCtx = useContext(JobContext);

  const buttonFilterClickHandler = (e) => {
    const { filterList } = jobCtx;
    if (filterList.includes(e.target.name)) return;
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
