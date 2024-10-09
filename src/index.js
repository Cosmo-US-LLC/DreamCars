import React, {Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import "./i18n";
import Loader from './components/Loader';


const DelayedSuspense = ({ children, delay = 5000 }) => {
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, delay); 

    return () => clearTimeout(timer); 
  }, [delay]);

  return delayPassed ? (
    <Suspense fallback={<Loader />}>
      {children} 
    </Suspense>
  ) : (
    <Loader /> 
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DelayedSuspense>
    <App />
  </DelayedSuspense>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
