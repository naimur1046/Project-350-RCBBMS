import './App.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HandlePage from './handlepage/HandlePage';



function App() {

  return (
    <div>

     

      
      
       <BrowserRouter>

          <HandlePage/>
       
       </BrowserRouter>


      

    

    </div>
  );

  
}

export default App
