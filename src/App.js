import Header from './components/Header/Index.jsx'
import Slider from './components/Slider/Index.jsx'
import Statistics from './components/Statistic/Index.jsx'
import AppBar from './components/AppBar/Index.jsx'
import UBank from './components/UBank/Index.jsx'
import Exchange from './components/Exchange/Index.jsx'
import FrontNews from './components/FrontNews/Index.jsx'
import Network from './components/Network/Index.jsx'
import Footer from './components/Footer/Index.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Statistics/>
      <AppBar/>
      <UBank/>
      <Exchange/>
      <FrontNews/>
      <Network/>
      <Footer/>
    </div>
  );
}

export default App;
