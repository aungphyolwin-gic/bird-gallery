import { FaArrowRightToBracket } from "react-icons/fa6";

const BirdCard = ({bird}) => {
    return ( // each card  
        <div className="">
            <div className="card bg-dark rounded-5 mb-3">  
                <div className="card-body">
                    <div className='ratio ratio-4x3 card-img mb-4'>
                        <img src={require('./' +bird.ImagePath)} alt="bird image" className='img-fluid rounded-5'  />
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className=' card-title text-white'>
                                <div className='text-uppercase lh-1'>{ bird.BirdEnglishName}</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <FaArrowRightToBracket className="p-0 fs-3 align-content-end align-self-auto " color="white" fontSize={20}/>
                        </div>
                    </div>
                    <div className='lh-lg text-white'>{ bird.BirdMyanmarName}</div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default BirdCard;