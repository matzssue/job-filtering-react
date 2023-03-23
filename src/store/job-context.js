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
  addJob: () => {},
  reset: () => {},
  change: () => {},
});

export default JobContext;
