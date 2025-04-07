import React, { useState } from "react";
import data from "../assets/tableTopics.json";
import "../css/tableTopicsCard.css";
import { TableTopic } from "../types";

type TableTopicsCardProps = {
  selectedTopic: TableTopic | null;
  handleRandomTopic: () => void;
};

const TableTopicsCard = ({
  selectedTopic,
  handleRandomTopic,
}: TableTopicsCardProps) => {
  return (
    <div className='flex flex-col items-center'>
      {selectedTopic ? (
        <div
          className='table-topics-card'
          style={{
            backgroundColor: selectedTopic.backgroundColor,
            color: selectedTopic.textColor,
          }}
        >
          <p>Table Topic # {selectedTopic.id}</p>
          <h2>{selectedTopic.topic}</h2>
        </div>
      ) : (
        <div
          className='table-topics-card'
          style={{ backgroundColor: "#d9b05e", color: "#000" }}
        >
          <h2>Table Topics</h2>
          <p>Click the button below to get your first table topic!</p>
        </div>
      )}
      <button className='button-primary my-4' onClick={handleRandomTopic}>
        New Table Topic
      </button>
    </div>
  );
};

export default TableTopicsCard;
