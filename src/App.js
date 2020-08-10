import React from 'react';
import './App.scss';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
}

export default App;
