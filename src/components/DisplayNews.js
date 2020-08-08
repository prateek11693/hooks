import React from "react";

function DisplayComponent(props) {
  const renderList = ({ data }) => {
    if (data) {
      return data.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
          </div>
        );
      });
    }
  };
  return (
    <>
      <h1>News</h1>
      {renderList(props)}
    </>
  );
}

export default DisplayComponent;
