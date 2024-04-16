import placeHolder from './assets/placeholder.png'

function Card(props){
    return(
        <div className="card">
                <img className="card-img" src={props.image} alt="Preview"  />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.discount}</p>
                <p className="card-text2"><s>{props.price}</s></p>
                <button>ADD TO CART</button>     
        </div>
    );
}

Card.defaultProps = {

    title: "Not Available",
    discount: 0,
    price: 0,
};

export default Card