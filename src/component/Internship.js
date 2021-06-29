import data from "./comp/data.json";
import Jobs from "./comp/Jobs";
import { useState } from "react";
import Header from "./comp/Header";
import Search from "./comp/Search";
import { useHistory } from "react-router-dom";
import React from 'react';
import "../css/Internship.scss";

function Internship() {
    const history=useHistory();
  const [filterKeywords, setfilterKeywords] = useState([]);


  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}
      
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default Internship;
