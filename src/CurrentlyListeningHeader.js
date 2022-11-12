

const CurrentlyListeningHeader = () => {

  const style = {
    height: "160px",
    background: "linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 104.37%), #1B5299",
    fontWeight: "900",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: "34px",
  }

  return (
    <div style={style}>

      <div>Currently Listening</div>
    </div>
  )
}

export default CurrentlyListeningHeader;