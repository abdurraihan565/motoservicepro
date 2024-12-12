import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './components/Navber';
import Home from './pages/Home';
import BookService from './pages/BookService';
import Customer from './pages/Customer';
import Service from './pages/Service';
import Management from './pages/Management';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
       <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/add-service" element={<Service />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/management" element={<Management />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
