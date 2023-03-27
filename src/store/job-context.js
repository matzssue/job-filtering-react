import React from "react";

const JobContext = React.createContext({
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
  filterList: [],
  addJob: () => {},
  reset: () => {},
  change: () => {},
  addFilter: () => {},
  removeFilter: () => {},
});

export default JobContext;
