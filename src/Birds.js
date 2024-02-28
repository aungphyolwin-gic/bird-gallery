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
        <div className="cards d-flex">
          <div className=" col-12">
            <div className="row row-cols-md-4">
                {birds &&
                  birds.map((bird) => 
                    <Link to={`/birds/${bird.id}`} className='text-decoration-none'>
                      <BirdCard bird={bird} />
                    </Link> )
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Birds;
