import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    // console.log(e.target.value);

    setSearchValue(e.target.value);
  };

  return (
    <section className="container mb-4">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar TO-DO"
            value={searchValue}
            onChange={onSearchValueChange}
          />
        </div>
      </div>
    </section>
  );
}

export { TodoSearch };
