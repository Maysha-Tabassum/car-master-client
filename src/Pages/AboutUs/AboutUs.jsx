import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="relative lg:w-1/2">
                        <img
                            src={person}
                            className=" rounded-lg shadow-2xl w-3/4" />
                        <img
                            src={parts}
                            className=" rounded-lg absolute right-4 top-1/2 border-white border-8 shadow-2xl w-1/2" />
                    </div>
                    <div className="lg:w-1/2 space-y-5 p-3">
                        <h3 className="text-orange-500 font-bold text-3xl">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.
                        </p>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.
                        </p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;