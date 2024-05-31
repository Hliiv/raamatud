import './App.css';
import './App.js';
import './Lemmikraamatud';

import Lemmikraamatud2 from './Lemmikraamatud2.js';
import Lemmikraamatud from './Lemmikraamatud';
import RaamatuPilt4 from './minu_tai.jpg';
import RaamatuPilt5 from './Läti.webp';
import RaamatuPilt6 from './hispaania.jpg';
import { useState } from 'react';
import Counter from './Counter.js';
import Ostukorv from './Ostukorv';
import UusOst from './UusOst';

const moreLemmikraamatud = [
  {
    nimi: 'Minu Tai',
    autor: 'Mai Loog',
    pilt: RaamatuPilt4
  },
  {
    nimi: 'Minu Läti',
    autor: 'Contra',
    pilt: RaamatuPilt5
  },
  {
    nimi: 'Minu Hispaania',
    autor: 'Anna-Maria Penu',
    pilt: RaamatuPilt6
  }
];

function App() {
  const [activeRaamat, setActiveRaamat] = useState(0);
  const [ostud, setOstud] = useState([
    { nimetus: 'Raamat', yhik: 'tk', kogus: 1, hind: '€', korvis: true },

  ]);

  const toggleKasKorvis = (index) => {
    console.log('Klikiti real ' + index);
    const uusMassiiv = ostud.map((ost, i) => {
      if (index !== i) {
        return ost;
      }
      return { ...ost, korvis: !ost.korvis };
    });

    setOstud(uusMassiiv);
  };


  const lisaToode = (nimetus, kogus, yhik, hind) => {
    const uusToode = {
      nimetus,
      yhik,
      kogus,
      hind,
      korvis: false
    };
    console.log(uusToode);
    setOstud([...ostud, uusToode]);
  };

  const handlePrevious = () => {
    setActiveRaamat((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveRaamat((prev) => Math.min(prev + 1, moreLemmikraamatud.length - 1));
  };
  
  const handleClick = (index) => {
    console.log(`click on book nr ${index}`);
    setActiveRaamat(index);
  };

  const moreLemmikraamatudJsx = moreLemmikraamatud.map((raamat, index) => (
    <div onClick={() => handleClick(index)} className="book-item">
    <Lemmikraamatud2 key={index} nimi={raamat.nimi} pilt={raamat.pilt} autor={raamat.autor} />
  </div>
  ));

  return (
    <div className="App">
      <h1>Minu lemmikraamatud</h1>
      <div className='container'>
        <div className="leftPane">
          {moreLemmikraamatudJsx}

          <div className="navigation">
            <button onClick={handlePrevious} disabled={activeRaamat === 0}>Previous</button>
            <button onClick={handleNext} disabled={activeRaamat === moreLemmikraamatud.length - 1}>Next Page</button>
          </div>
          <UusOst lisaToode={lisaToode} />
          <Ostukorv ostud={ostud} toggleKasKorvis={toggleKasKorvis} />
          <h4>Ostukorvis on {ostud.filter(ost => ost.korvis).length} toodet</h4>
        </div>

        <div className='rightPane'>
          <Lemmikraamatud
            nimi={moreLemmikraamatud[activeRaamat].nimi}
            autor={moreLemmikraamatud[activeRaamat].autor}
            pilt={moreLemmikraamatud[activeRaamat].pilt}
          />
          <Counter />

        </div>
      </div>
    </div>

  );
}

export default App;