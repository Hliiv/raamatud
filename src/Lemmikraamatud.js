function Lemmikraamatud(props) {
    
    console.log(props)

    let raamatuStyle = "autor";

    if (props.nimi === "") {
        raamatuStyle = "autor"


    }
    
    return (<div>
        <h2 className={raamatuStyle}> {props.nimi} </h2>
        <h3>{props.autor}</h3>
        
        <img className= 'img-responsive' src= {props.pilt} />
    </div>)
}
export default Lemmikraamatud