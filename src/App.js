import React from 'react';
import './resources/styles.css';

import Header from './component/header_footer/header';
import Featured from './component/featured';

function App() {
  return (
    <div className="App" style={{height: "1500px",background:"cornflowerblue"}}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
