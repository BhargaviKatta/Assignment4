import './stylestwo.css';

import Features from './Features';

import Display from './Display';

import Navbar from './Navbar';

 

function App(){

    return (

        <>
         <div className='above-navbar'><b>Try out a preview of the new React Docs!</b><i></i></div>

        <Navbar />

        <Display />
        <Features />

        </>

    )

}

 

export default App;