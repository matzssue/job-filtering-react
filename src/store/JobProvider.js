import React from "react";
import JobContext from "./job-context";
import { useReducer } from "react";

const defaultJob = {
  items: [],
  company: "",
  new: true,
  featured: false,
  position: "",
  role: "",
  contract: "",
  location: "",
  languages: [],
  tools: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    case "RESET_VALUES":
      return {
        state,
      };
    default:
      return state;
  }
};
const JobProvider = (props) => {
  const [jobState, dispatch] = useReducer(formReducer, defaultJob);

  const handleChange = (name, value) => {
    dispatch({ type: "UPDATE_VALUE", payload: { name: name, value: value } });
  };
  console.log(jobState);
  const addJobHandler = (item) => {
    dispatch({ type: "UPDATE_VALUE", items: item });
  };

  const resetValues = (item) => {
    dispatch({
      type: "RESET_VALUES",
    });
  };

  const jobContext = {
    items: jobState.items,
    company: jobState.company,
    new: true,
    featured: false,
    position: jobState.position,
    role: jobState.role,
    contract: jobState.contract,
    location: jobState.location,
    languages: jobState.languages,
    tools: jobState.tools,
    addJob: addJobHandler,
    reset: resetValues,
    change: handleChange,
  };

  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  );
};
export default JobProvider;
