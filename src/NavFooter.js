

const NavFooter = () => {

  const style = {
    background: "#694D75",
    height: "80px",
    display: "flex",
    position: "absolute",
    bottom: "0",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px",
    boxSizing: "border-box",
  }

  const ImgStyle = {
  }

  const ImgWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={style} >
        <div style={ImgWrapperStyle} ><img style={ImgStyle} src="Home.png" /></div>
        <div style={ImgWrapperStyle} ><img style={ImgStyle} src="Us.png" /></div>
        <div style={ImgWrapperStyle} ><img style={ImgStyle} src="Plus.png" /></div>
        <div style={ImgWrapperStyle} ><img style={ImgStyle} src="Search.png" /></div>
        <div style={ImgWrapperStyle} ><img style={ImgStyle} src="ProfilePic.png" /></div>
    </div>
  )
}

export default NavFooter;