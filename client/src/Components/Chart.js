import React from "react";

function barChart(props) {
  const data = props.data;
  //console.log(props);
  let left = -18;
  return (
    <div>
      {data.map(val => {
        left += 18;
        return (
          <div
            key={`${val}`}
            style={{
              backgroundColor: "red",
              color: "white",
              height: 5 * val,
              width: "14%",
              position: "absolute",
              marginLeft: "2%",
              marginRight: "2%",
              bottom: "60px",
              left: 5 + left + "%"
            }}
          >
            <div
              className="chartVal"
              style={{ position: "absolute", bottom: 5 + 5 * val }}
            >
              value
            </div>
            <div
              className="chartVal"
              style={{ position: "absolute", bottom: "-25px" }}
            >
              label
            </div>
          </div>
        );
      })}
      <div className="chartBaseLine" />
    </div>
  );
}

const Chart = props => {
  return (
    <div
      style={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute"
      }}
    >
      {barChart(props)}
    </div>
  );
};

export default Chart;
