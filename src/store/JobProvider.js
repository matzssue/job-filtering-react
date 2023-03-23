import React from "react";
import JobContext from "./job-context";
import { useReducer } from "react";

const defaultJob = {
  items: [],
  data: {
    company: "",
    new: true,
    featured: false,
    position: "",
    role: "",
    contract: "",
    location: "",
    languages: [],
    tools: [],
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value,
        },
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case "RESET_FORM":
      return {
        ...state,
        data: defaultJob.data,
      };
    default:
      return state;
  }
};
const JobProvider = (props) => {
  const [jobState, dispatch] = useReducer(formReducer, defaultJob);

  const handleChange = (name, value) => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: { name: name, value: value },
    });
  };

  const addJobHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: jobContext.data });
  };

  const resetFormHandler = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  const jobContext = {
    items: jobState.items,
    data: {
      company: jobState.data.company,
      new: true,
      featured: false,
      position: jobState.data.position,
      role: jobState.data.role,
      contract: jobState.data.contract,
      location: jobState.data.location,
      languages: jobState.data.languages,
      tools: jobState.data.tools,
    },

    addJob: addJobHandler,
    reset: resetFormHandler,
    change: handleChange,
  };

  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  );
};
export default JobProvider;
