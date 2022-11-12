import LoginTile from "./LoginTile";


const Login = ({ spotifyLogin }) => {


  const style = {
    background: "#9EC2CC",
    height: "100%",
  }

  const ImgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "100px",
    marginBottom: "50px",
  }

  const Img2Style = {
    display: "block",
  }

  const LogoCtnStyle = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "900",
    color: "white",

    fontSize: "96px",
    lineHeight: "123px",
    textAlign: "center",
  }

  const Logo1Style = {

  }

  const Logo2Style = {
    color: "#1B5199",
  }

  const TileCtnStyle = {
    // display: "flex",
    // justifyContent: "center",
  }

  const TileCtnWrStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const FooterStyle = {
    position: "absolute",
    bottom: 0,
  }

  return (
    <div style={style}>

      {/* <img src="./" */}
      <div style={ImgStyle}>
        <div style={Img2Style}>
          <img src="chorus logo 1.png" />
        </div>
      </div>
      <div style={LogoCtnStyle}><span style={Logo1Style}>Chor</span><span style={Logo2Style}>us</span></div>


      <div style={TileCtnWrStyle}>
        <div style={TileCtnStyle}>
          <LoginTile text="Sign up with Spotify" onClick={spotifyLogin} />
          <LoginTile text="Sign up with Apple" />
          <LoginTile text="Sign up with email" />
        </div>
      </div>
      <div style={FooterStyle}>
          <img src="Footer.png" />
        </div>

    </div>
  )
}

export default Login;