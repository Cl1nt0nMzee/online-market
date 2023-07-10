import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/page_layouts/register.scss'

// import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/atoms/button/Button.jsx';
import { ImageSection } from './components/molecules/imageSection/ImageSection';
import RegisterForm from './components/organisms/RegisterForm';

function App() {
  

  return (
    <main className='pageWrapper'>

      <ImageSection />
      <RegisterForm/>
    </main>
  )
}

export default App
