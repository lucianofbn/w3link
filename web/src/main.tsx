import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/HomePage'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditPage from './pages/edit/EditPage'
import ProfilePage from './pages/profile/ProfilePage'
import { ThemeProvider } from "@material-tailwind/react";
import { getLibrary } from './controller/udlogin/provider'
import { Web3ReactProvider } from '@web3-react/core'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </Router>
    </Web3ReactProvider>
  </ThemeProvider>
)
