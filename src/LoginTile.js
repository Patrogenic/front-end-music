

const LoginTile = ({ text, onClick }) => {

  const style = {
    background: "#694D75",
    width: "290px",
    height: "66px",
    borderRadius: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  }

  const textStyle = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "20px",
    lineHeight: "26px",
    color: "white",
  }

  return (
    <div style={style} onClick={onClick}>
      <div style={textStyle}>
        {text}
      </div>
    </div>
  )
}

export default LoginTile;