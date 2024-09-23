import Layout from './layout';
import i18n from 'i18next';
import { ToastContainer } from 'react-toastify';


function App() {

  const handelClick = (lang) => {
    i18n.changeLanguage(lang);
    console.log(handelClick, "sdj")
}
  return (
    <div className="">
       <ToastContainer />
    <Layout handelClick={handelClick} />
    </div>
  );
}

export default App;
