import React, { useEffect, useState } from "react";
import axios from "axios";
import KanbanBoard from "./KanbanBoard";
import { Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [displayOptions, setDisplayOptions] = useState(false); // State for showing/hiding select elements

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDisplayClick = () => {
    setDisplayOptions(!displayOptions);
  };

  return (
    <div className="app">
      <div className="displayButton" onClick={handleDisplayClick}>
        <TuneRoundedIcon sx={{ fontSize: 15 }} />
        Display
        <ExpandMoreIcon sx={{ fontSize: 15 }} />
      </div>
      {displayOptions && (
        <div className="selectOptions">
          <div className="controls">
          </div>
        </div>
      )}
      <KanbanBoard
        tickets={tickets}
        users={users}
        
      />
    </div>
  );
}

export default App;
