import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BirdDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: bird, isPending, error } = useFetch(
    "https://json-server-host.vercel.app/Birds/" + id
  );
  // console.log(bird);
  const handleClick = ()=>{
    fetch("https://json-server-host.vercel.app/Birds/" + id, 
        {method: 'DELETE'})
        .then(()=>{
          // console.log('delete success.')
          history.push('/birds');
        })
  }
  return (
    <>
      <div className="container">
        {isPending && <div> Loading</div>}
        {error && <div> {error}</div>}

        {bird && (
          <>
            <div className="row">
              <h2 className="text-success text-center mb-5 fw-bolder">
                {bird.BirdMyanmarName} အကြောင်း
              </h2>
            </div>

            <div className=" row justify-content-center ">
              <div className="col-md-6">
                <div className="card img-thumbnail bg-dark">
                  <img src={require("./" + bird.ImagePath)} alt="Bird image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow bg-dark text-white">
                  <div className=" card-header">
                    <div className=" card-title text-center fw-bold fs-2">
                      {bird.BirdEnglishName}
                    </div>
                    <div className=" card-subtitle text-center fw-bold fs-5 shadow">
                      {bird.BirdMyanmarName}
                    </div>
                  </div>
                  <div className="card-body">{bird.Description}</div>
                </div>
                <div className="mt-3 d-flex justify-content-end">
                  <button onClick={handleClick} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BirdDetail;
