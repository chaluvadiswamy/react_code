import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import ArrDup from './ArrDup';
// import BinaryGapCalculator from './BinaryGapCalculator';
// import ReplaceQuo from './ReplaceQuo';
import ReactLikeButton from './ ReactLikeButton';
import LikeDislike from './LikeDisLike';
import Counter from './Counter';
import ButtonComponent from './ButtonComponent';
// import Search from './Search';
// import Posts from './Posts';
import RatingsList from './RatingsList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*      
     <ReactLikeButton/> */}
    {/* <LikeDislike/>
    <Counter/>
    <ButtonComponent name={'Submit'}/> */}
    <RatingsList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
