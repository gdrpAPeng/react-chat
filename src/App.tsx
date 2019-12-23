import React from 'react';
import './assets/css/app.scss'

import HomeLayout from 'pages/home'

const App: React.FC = () => {
  return (
      <div className="App">
        <HomeLayout />
      </div>
  );
}

export default App;