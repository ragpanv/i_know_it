import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./Job.scss";

const Job = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];


  return (
    <div>
      <div className={featured? "job-container job-container--borderLeft":"job-container"}>
        <div className="logo">
        </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{company}</span>
            {props.data.new && <span className="new"> new!</span>}
            {props.data.featured && <span className="featured"> featured</span>}
          </div>

          <div className="position">{position}</div>

          <div className="details">
            <span>{postedAt}</span>
            <span> </span>
            <span>{contract}</span>
            <span> </span>
            <span>{location}</span>
          </div>
        </div>

        <div className="part2">
          {keywords.map((key, id) => (
            <span onClick={() => props.setkeywords(key)} key={id}>
              {key}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
