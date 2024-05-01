import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Practice from './Practice';
import Counter from './Counter';
import ProfileCard from './ProfileCard';
import DynamicList from './DynamicList';
import CrudOperation from './CrudOperation';
import CheckBox from './checkBox';
import SearchImage from './Axios';
import Books from './components/Books';
import AgeCalculaor from './AgeCalculaor';
import CounterPage from './components/CounterPage';
import ForwardRef from './refs/ForwardRef';
import Collapse from './Collapse';
import DropDown from './DropDown';
import BusSeatLayOut from './BusSeatLayOut';
import ContextCounter from './context/Counter';
import { CountProvider } from './context/MyContext';
import DisplayCount from './context/DisplayCount';
import InputValueContext from './context/InputValueContext';
import DisplayInputValue from './context/DisplayInputValue';
import HighOrderComponent from './hoc/HighOrderComponent';
import ServerData from './hoc/ServerData';
import WithDataFeatching from './hoc/WithDataFeatching';
import HandleWindowSize from './customHook/HandleWindowSize';
import Otp from './otp/Otp';
import DuplicateObjects from './listObjects/DuplicateObjects';
import AutoPopulation from './listObjects/AutoPopulation';
import Routes from './components/route/Routes';
import { AppStore } from './common/AppStore';
import { Provider } from 'react-redux';
// import ImageShow from './components/ImageShow';
// import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rest = {
  id:"123"
}
root.render(
  <React.StrictMode>
    {/* <Practice/> */}
    {/* <Counter/>  */}
    {/* <App/> */}
    {/* <ProfileCard color={"red"} fontSize={42} border={"2px solid powderblue"} rest={rest}/> */}
    {/* <DynamicList/> */}
    {/* <SearchImage/> */}
    {/* <CrudOperation/>
    <CheckBox/> */}
    {/* <Books/> */}
    {/* <AgeCalculaor/> */}
    {/* <Collapse/> */}
    {/* <CheckBox/> */}
    {/* <CounterPage initialCount={0}/> */}
    {/* <ForwardRef/> */}
    {/* <ImageShow/> */}
    {/* <DropDown/> */}
    {/* <BusSeatLayOut/> */}

    {/* context */}

<Provider store={AppStore}>


    <CountProvider>
<ContextCounter/>
{/* <DisplayCount/>
<InputValueContext/>
<DisplayInputValue/> */}
    <Routes/>
    </CountProvider>
    </Provider>

    {/* hoc */}

    {/* <HighOrderComponent/> */}
    {/* <ServerData/>
    <WithDataFeatching/> */}
    {/* <HandleWindowSize/> */}
    {/* <Otp/> */}
    {/* <DuplicateObjects/> */}
    {/* <AutoPopulation/> */}
    {/* <CountProvider>
      <Routes />
    </CountProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
