import { useState } from "react";

export default function Player({initialName, symbol ,isActive, onChangeName}) {
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);

        if(isEditing){
          onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setplayerName(event.target.value)
    }

    let editablePlayerName=<span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName= <input type="text" value={playerName} onChange={handleChange} required />
    }

  return (
    <>
      <li className={isActive? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    </>
  );
}
