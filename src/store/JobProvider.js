import React from "react";
import JobContext from "./job-context";
import { useReducer } from "react";

const defaultJob = {
  items: [],
  currentFormIndex: 0,
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
  filterList: [],
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
        currentFormIndex: +state.currentFormIndex + 1,
        items: state.items.concat(action.payload),
      };
    case "RESET_FORM":
      return {
        ...state,
        data: defaultJob.data,
      };
    case "FILTER_LIST":
      return {
        ...state,
        filterList: state.filterList.concat(action.filter),
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        filterList: state.filterList.filter(
          (filter) => filter !== action.target
        ),
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
  const AddfilterHandler = (filter) => {
    dispatch({
      type: "FILTER_LIST",
      filter: filter,
    });
  };
  const removeFilterHander = (target) => {
    dispatch({
      type: "REMOVE_FILTER",
      target: target,
    });
  };

  const jobContext = {
    items: jobState.items,
    data: {
      currentFormIndex: jobState.currentFormIndex,
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
    filterList: jobState.filterList,

    addJob: addJobHandler,
    reset: resetFormHandler,
    change: handleChange,
    addFilter: AddfilterHandler,
    removeFilter: removeFilterHander,
  };

  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  );
};
export default JobProvider;
