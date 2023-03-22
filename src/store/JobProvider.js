import React from "react";
import JobContext from "./job-context";
import { useReducer } from "react";

const defaultJob = {
  items: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        items: state.items.concat(action.item),
      };
    case "RESET_VALUES":
      return {};
    default:
      return state;
  }
};
const JobProvider = (props) => {
  const [jobState, dispatch] = useReducer(formReducer, defaultJob);

  const addInfomationHandler = (item) => {
    dispatch({
      type: "UPDATE_VALUE",
      item: item,
    });
  };

  const resetValues = (item) => {
    dispatch({
      type: "RESET_VALUES",
      ...jobState,
      item: item,
    });
  };

  const jobContext = {
    items: jobState.items,
    addJob: addInfomationHandler,
    reset: resetValues,
  };

  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  );
};
export default JobProvider;
