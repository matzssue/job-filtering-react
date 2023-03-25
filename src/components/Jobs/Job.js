import JobButtons from "./JobButtons";

const Job = (props) => {
  return (
    <li index={props.index}>
      <span className={props.new}>NEW!</span>
      <div className={props.info}>
        <span className={props.company}>{props.companyName}</span>
        <span className={props.position}>{props.positionName}</span>
        <span className={props.location}>{props.locationName}</span>
      </div>
      <JobButtons
        className={props.buttonStyles}
        buttonsArray={props.buttonsArray}
      />
    </li>
  );
};
export default Job;
