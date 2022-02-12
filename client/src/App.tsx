import React from 'react';
import Layout from './components/Layout';
import StoreBox from './components/search/StoreBox';
import SuggestionBlock from './components/search/SuggestionBlock';

function App() {
  return (
    <Layout>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="panel">
            <div className="panel-block">
              <p className="block control has-icons-left">
                <input type="text" className="input" placeholder="Search Store Name or Postcode" />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>

            <SuggestionBlock />
            <SuggestionBlock />
            <SuggestionBlock />
          </div>
        </div>
      </div>

      <div className="columns is-multiline">
        <StoreBox />
        <StoreBox />
        <StoreBox />
        <StoreBox />
        <StoreBox />
        <StoreBox />
      </div>
    </Layout>
  );
}

export default App;
