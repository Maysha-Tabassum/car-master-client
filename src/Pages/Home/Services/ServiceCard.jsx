import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price : ${price}</p>
                <div className="card-actions ">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-warning">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;