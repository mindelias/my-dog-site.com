import React from "react";
import "./style.tsx";
import DisplayGifs from '../../components/ImageCard'
import HomeWrapper from './style'
// import { Search } from "semantic-ui-react";
import Search from '../../components/Search'


function Home() {

  
  return (
    <HomeWrapper className="homepage">
      <div className="homepage-container">
        <div className= 'filter-container'>
          <Search/>
        </div>

        <DisplayGifs />
        
      
        
      </div>
    </HomeWrapper>
  );
}

export default Home;
