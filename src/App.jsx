import './App.css';
import Heading from './components/Heading';
import SearchMbti from './components/SearchMbti';
import Translate from './components/Translate';

function App() {
  return (
    <div className="mainContainer">
      <Heading />
      <SearchMbti />
      <Translate />
    </div>
  )
}

export default App;
