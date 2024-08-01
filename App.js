import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Form from './component/form';

import Design from './component/design';
import Responsive from './component/responsive';
import Estimate from './component/estimate';
import Join from './component/join'
import Footer from './component/footer'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Goal from './component/goal';


function App() {
  const [title, setTitle] = useState(`WEBSITES FOR ANY GOAL`)
  return (
    <>
      <Routes>
        <Route path='/header' element={<Header />} />
        <Route path='/design' element={<Design />} />
        <Route path='/goal' element={<Goal />} />
        {/* <Route path='/form' element={<Form />} /> */}
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/responsive' element={<Responsive />} />
        <Route path='/join' element={<Join/>}/>
      </Routes>
      {/* <Header/>
   <Form/>
   <Goal title={title}/>
   <Design/>
   <Responsive/>
   <Estimate/>
   <Join/>
   <Footer /> */}
    </>
  );
}

export default App;
