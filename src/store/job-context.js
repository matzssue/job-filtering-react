import React from "react";

const JobContext = React.createContext({
  company: "",
  new: true,
  featured: false,
  position: "",
  role: "",
  contract: "",
  location: "",
  languages: [],
  tools: [],
});

export default JobContext;
