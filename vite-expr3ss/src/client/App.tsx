import About from './Pages/About';
import Home from '../../src/client/Pages/Home';
import Services from '../../src/client/Pages/Services';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProtectRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { EventManager } from './components/EventManager';

function App() {
  return (
        <>
            <Navbar />
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Pages/about" element={<About />} />
                    <Route path="/Pages/dashboard" element={
                        <ProtectRoute>
                            <Dashboard />
                        </ProtectRoute>
                    } />
                    <Route path="/components/Profiles" element={
                        <ProtectRoute>
                            <EventManager />
                        </ProtectRoute>
                    } />
                    <Route path="/Pages/services" element={
                        <ProtectRoute>
                            <Services />
                        </ProtectRoute>
                    } />
                </Routes>
            </ErrorBoundary>

        </>
    );
}

export default App;
