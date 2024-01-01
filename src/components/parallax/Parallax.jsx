import "./parallax.scss"

const Parallax = ({type}) => {
  return (
    <div 
    className="parallax" 
    style={{
        background:type === "services"
        ? "linear-gradient(180deg, #0c0c1d, #111132);" 
        : "linear-gradient(180deg, #0c0c1d, #505064);"
        }}
    >
        <h1>{type === "services" ? "What We Do?" : "What We Did!"}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax