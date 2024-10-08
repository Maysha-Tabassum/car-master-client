// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";


const Services = () => {

    const services = useServices();

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className="mt-4 mb-3">
            <div className="text-center mb-3">
                <h2 className="text-2xl text-orange-500 font-bold">Services</h2>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;