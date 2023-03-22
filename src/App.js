import "./App.scss";
import FilterContainer from "./components/Filters/FilterContainer";
import Header from "./components/Header/Header";
import JobsContainer from "./components/Jobs/JobsContainer";
import Wrapper from "./components/Wrapper/Wrapper";
import Form from "./components/JobForm/Form";
import JobProvider from "./store/JobProvider";

function App() {
  return (
    <Wrapper>
      <JobProvider>
        <Header />
        <Form />
        <FilterContainer />
        <JobsContainer />
      </JobProvider>
    </Wrapper>
  );
}

export default App;
