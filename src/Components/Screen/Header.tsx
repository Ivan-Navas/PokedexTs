import { useState } from "react";
import "../../styles/header.css";

export default function Header() {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__light"></div>
      {error ? (
        <div className="header__statusLight header--red red--on"></div>
      ) : (
        <div className="header__statusLight header--red "></div>
      )}
      <div className="header__statusLight header--yellow"></div>
      {success ? <div className="header__statusLight header--green green--on"></div> : <div className="header__statusLight header--green"></div>}
    </header>
  );
}
