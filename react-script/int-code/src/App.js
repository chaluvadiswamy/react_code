//import logo from './logo.svg';
import './App.css';
import DisplayForm from './Form/DisplayForm';
import DeleteRow from './Interview/DeleteRow';
import Posts from './Interview/Posts';
import Rowlist from './Interview/Rowlist';
import List from './Movies/List';
import RatingsList from './RatingsList';
import InputForm from './Simple/InputForm';
import Sample from './Simple/Sample';
import Stopwatch from './Simple/Stopwatch';
import Timer from './Simple/Timer';
//import Parent from './Interview/Parent';
import ThemeProvider from './Theme/ThemeProvider';
import ThemedComponent from './Theme/ThemedComponent';
//import EventChange from './Interview/EventChange';
//import Count from './Interview/Count'; 
//import Count1 from './Interview/Count1';
//import Listmap from './Interview/Listmap';
//import FetchByUrl from './Interview/FetchByUrl';


function App() {
  return (
    <div className="App">
      <RatingsList/>
      {/* <Timer />
      <Sample name="Sample Claire" />
      <div>
        <InputForm/>
      </div> */}
     <List/>
    </div>

    // <Stopwatch/>
    // <Posts/>
    // <DisplayForm/>
    // <DeleteRow/>
    // <ThemeProvider>
    //   <ThemedComponent />
    // </ThemeProvider>
  );
}

export default App;
