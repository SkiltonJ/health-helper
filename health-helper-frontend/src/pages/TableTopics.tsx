import React from "react";
import { useState } from "react";
import TableTopicsCard from "../components/TableTopicsCard";
import { TableTopic } from "../types";
import data from "../assets/tableTopics.json";
import "../css/tableTopics.css";

const TableTopics = () => {
  const [showRules, setShowRules] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<TableTopic | null>(null);
  const tableTopics = data.cards;

  const handleOnClick = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

  const handleRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * tableTopics.length);
    setSelectedTopic(tableTopics[randomIndex]);
  };

  return (
    <div className='table-topics-container'>
      <section className='flex flex-col items-center'>
        <h2 className='table-topics_header'>Welcome to Table Topics</h2>
        <p>A game of vulnerability that encourages real life connection.</p>
      </section>

      <section className='flex flex-col items-center'>
        <TableTopicsCard
          selectedTopic={selectedTopic}
          handleRandomTopic={handleRandomTopic}
        />
      </section>

      <section className='flex flex-col items-center'>
        <button onClick={handleOnClick} className='flex'>
          How to play
          {!showRules ? (
            <img
              src={require("../assets/icons/arrow_drop_down_white.png")}
              alt='Arrow Drop Down'
              height={24}
              width={24}
            />
          ) : (
            <img
              src={require("../assets/icons/arrow_drop_up_white.png")}
              alt='Arrow Drop Up'
              height={24}
              width={24}
            />
          )}
        </button>
      </section>
      {showRules && (
        <section className='flex flex-col items-center text-center'>
          <p className='mb-4'>
            Pick a randomized Table Topic and take it in turns giving your
            answers.
          </p>
          <h3>Rules:</h3>
          <p>1. No judgement</p>
          <p>2. No interruptions</p>
          <p>3. No phones</p>
          <p>4. No talking over each other</p>
        </section>
      )}
    </div>
  );
};

export default TableTopics;
