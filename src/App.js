import {useEffect} from 'react';
import './App.css';
import MainSection from './MainSection';
import useLocalStorage from './hooks/useLocalStorage';
import useDetectDevice from './hooks/useDetectDevice';


function App() {
  const [desktopTheme, setDesktopTheme] = useLocalStorage('desktopTheme', 'light');
  const [mobileTheme, setMobileTheme] = useLocalStorage('mobileTheme', 'light');
  const device = useDetectDevice();



  const handleDesktopTheme = (desktopTheme, device) => {
    if (device === 'desktop' && desktopTheme === 'dark') {
      setDesktopTheme('light')
    } else if (device === 'desktop' && desktopTheme === 'light'){
      setDesktopTheme('dark')
    }
  }
  

  useEffect(() => {
    if(device === 'mobile') {
      document.body.className=mobileTheme;
    } else if (device === 'desktop') {
      document.body.className=desktopTheme;
    }
    
  }, [mobileTheme, desktopTheme, device]);


  return (
    <div className="App">
      <button className='btn' onClick={() => handleDesktopTheme(desktopTheme, device)}>Toggle Theme</button>
      <MainSection />
    </div>
  );
}

export default App;
