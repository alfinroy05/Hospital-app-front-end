import logo from './logo.svg';
import './App.css';
import DeleteHospital from './Hospital/DeleteHospital';
import Index from './Hospital/Index';
import SearchHospital from './Hospital/SearchHospital';
import View from './Hospital/View';
import AddPatient from './Hospital/AddPatient';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/add' element={<AddPatient/>}/>
      <Route path='/delete' element={<DeleteHospital/>}/>
      <Route path='/search' element={<SearchHospital/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
