

const ProgressBar = ({ currTime, songLength }) => {
  const progress = (currTime / songLength); // percentage/decimal
  // const timeListened = (currTime / 1000);
  // const timeLeft = (songLength - currTime) / 1000;

  const style = {
    width: "100%",
    // border: "1px solid white",
    display: "flex",
    padding: "0 30px",
    boxSizing: "border-box",
  }

  const Bar1Style = {
    width: `${progress * 100}%`,
    background: "white",
    height: "5px",
  }

  // console.log("width", (songLength - currTime) / 1000)
  const Bar2Style = {
    width: `${((songLength - currTime) / songLength) * 100}%`,
    background: "grey",
    height: "5px",
  }

  return (
    <div style={style}>
      
      <div style={Bar1Style}></div>
      <div style={Bar2Style}></div>
      {/* Progress Bar */}
    </div>
  )
}

export default ProgressBar;