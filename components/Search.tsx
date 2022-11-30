import React from "react";

interface propsSearch {
  value: string;
  setSearchValue: any;
}

const Search = (props: propsSearch) => {
  return (
    <div>
      <input
        onChange={(e) => props.setSearchValue(e.target.value)}
        value={props.value}
        className="bg-white text-black py-2 px-4 rounded-md "
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
