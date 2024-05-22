
import './App.css';
import Lemmikraamatud from './Lemmikraamatud';
import RaamatuPilt1 from './jaapan.jpg'
import RaamatuPilt2 from './MinuDubai_Big (1) (1).webp'
import RaamatuPilt3 from './USA.jpg'
import RaamatuPilt4 from './minu_tai.jpg'
import RaamatuPilt5 from './Läti.webp'
import RaamatuPilt6 from './hispaania.jpg'



const moreLemmikraamatud = [
  {
    nimi: 'Minu Tai',
    autor: 'Mai Loog',
    pilt: {RaamatuPilt4}
  },

  {
    nimi: 'Minu Läti',
    autor: 'Contra',
    pilt: {RaamatuPilt5}
  },

  {
    nimi: 'Minu Hispaania',
    autor: 'Anna-Maria Penu',
    pilt: {RaamatuPilt6}
  }
]
  function App() {
    const moreLemmikraamatudJsx = moreLemmikraamatud.map((raamat) => <Lemmikraamatud nimi={raamat.nimi} autor={raamat.autor} />)


  return (
    <div className="App">
      <h1> Minu lemmikraamatud</h1>
      <Lemmikraamatud nimi="Minu Jaapan" autor="Maret Nukke" pilt={RaamatuPilt1} />
      <Lemmikraamatud nimi="Minu Dubai" autor="Susan Luitsalu" markused="adshhjjakkka" pilt={RaamatuPilt2} />
      <Lemmikraamatud nimi="Minu Ameerika" autor="Epp Petrone" markused="adshhjjakkka" pilt={RaamatuPilt3} />
      {moreLemmikraamatudJsx}

    </div>

  );
}

export default App;
