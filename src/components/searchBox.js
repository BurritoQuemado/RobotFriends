import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--blue bg-lightest-blue"
                placeholder="search robot"
                type="search"
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;