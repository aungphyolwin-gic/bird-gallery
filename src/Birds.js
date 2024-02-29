import { Link } from "react-router-dom";
import BirdCard from "./BirdCard";
import useFetch from "./useFetch";

const Birds = () => {
  const { data: birds, isPending, error } = useFetch(
    "https://json-server-host.vercel.app/Birds"
  );
  // console.log(birds)

  return (
    <>
      <div className="bird-content container">
        <h2 className="text-center text-white">BIRDS</h2>
        {/* cards  */}
        <div className="d-flex">
          <div className="row ">
            {birds &&
              birds.map((bird) => (
                <div className="col-md-3 align-self-stretch" key={bird.id}>
                  <Link
                    to={`/birds/${bird.id}`}
                    className="text-decoration-none"
                  >
                    <BirdCard bird={bird} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Birds;
