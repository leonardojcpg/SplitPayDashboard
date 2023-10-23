import React from "react";
import "./styles.css";
import funcionarios from "./assets/funcionarios.svg";
import avaliacoes from './assets/avali.svg'

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <h1>Funcionários</h1>
        <img src={funcionarios} alt="" />
        <span>13</span>
      </div>
      <div className="card">
        <h1>Avaliações</h1>
        <img src={avaliacoes} alt="" />
        <span>22</span>
      </div>
      <div className="card">
        <h1>Clientes</h1>
        <img src={funcionarios} alt="" />
        <span>50</span>
      </div>
      <div className="card">
        <h1>Exames</h1>
        <img src={funcionarios} alt="" />
        <span>13</span>
      </div>
      <div className="card">
        <h1>Unidades</h1>
        <img src={funcionarios} alt="" />
        <span>15</span>{" "}
      </div>

      <div className="filters">
        <h3>Pesquisa de Funcionários</h3>
        <select>
          <option>Cidade</option>
        </select>
        <select>
          <option>Especialidade</option>
        </select>
        <select>
          <option>Unidade</option>
        </select>
        <select>
          <option>Unidade</option>
        </select>
        <select>
          <option>Unidade</option>
        </select>
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default Cards;
