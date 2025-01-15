import { useEffect } from 'react';
import './App.css';
import { ArticlesContainer } from './components/ArticlesContainer';
import Header from './components/Header/Header';
import { useAppContext } from './context/context';

const API_URL = 'https://cloud.codesupply.co/endpoint/react/data.json';
function App() {
  const { data, setData } = useAppContext();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((rawData) => setData(rawData));
  }, []);

  return (
    <div className="appContainer">
      <Header />
      <ArticlesContainer data={data} />
    </div>
  );
}

export default App;
