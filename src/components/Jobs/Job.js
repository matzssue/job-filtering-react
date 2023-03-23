const Job = (props) => {
  return (
    <li>
      <span className={props.new}>NEW!</span>
      <div className={props.info}>
        <span className={props.company}>{props.companyName}</span>
        <span className={props.position}>{props.positionName}</span>
        <span className={props.location}>{props.locationName}</span>
      </div>
      <div className={props.buttons}>
        <button>FRONTEND</button>
        <button>Senior</button>
        <button>HTML</button>
        <button>CSS</button>
        <button>JAVASCRIPT</button>
      </div>
    </li>
  );
};
export default Job;
