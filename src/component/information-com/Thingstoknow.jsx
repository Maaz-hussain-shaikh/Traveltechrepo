import React from 'react'

const Thingstoknow = (props) => {
  return (
    <>
      <div className="flex flex-col w-full mt-8">
        <div className="flex flex-col">
          <h2 className="text-2xl  font-bold">Things to know</h2>
          <span className="font-medium text-text">Before you go
          </span>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">What's included</h3>
            <div className="flex flex-col space-y-2">

              {
                props.inclusion.map((item, index) => {
                  let output;

                  switch (props.inclusion[index].name) {
                    case 'Transport':
                      output = <i className="fa-solid fa-car-side"></i>;
                      break;
                    case 'Accommodation':
                      output = <i className="fa-solid fa-bed"></i>;
                      break;
                      case 'Meals':
                      output = <i className="fa-solid fa-utensils"></i>;
                      break;
                    default:
                      output = <p>No option selected</p>;
                  }
                 
                  return (<>
                      <div className="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}
                      <span className="font-semibold">{props.inclusion[index].name}</span>


                      <div className="text-xs">
                        <p>{props.inclusion[index].inc}</p>
                      </div>
                    </div>
                  </>)
                })

              }           
              
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">What's not included</h3>
            <div className="flex flex-col space-y-2">

            {
                props.exclusion.map((item, index) => {
                  let output;

                  switch (props.exclusion[index].name) {
                    case 'expenses':
                      output = <i className="fa-solid fa-hand-holding-dollar"></i>;
                      break;
                    case 'Transport':
                      output = <i className="fa-solid fa-plane-slash"></i>;
                      break;
                      case 'Meals':
                      output = <i className="fa-solid fa-burger"></i>;
                      break;
                    default:
                      output = <></>;
                  }
                 
                  return (<>
                      <div className="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}                
                      <div className="text-xs">
                        <p>{props.exclusion[index].inc}</p>
                      </div>
                    </div>
                  </>)
                })

              }
              
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg">What to carry</h3><div className="flex flex-col space-y-2">
            {
                props.thingstotake.map((item, index) => {
                  let output;

                  switch (props.thingstotake[index].name) {
                    case 'moisturizer':
                      output = <i className="fa-solid fa-hand-sparkles"></i>;
                      break;
                    case 'hiking':
                      output = <i className="fa-solid fa-person-hiking"></i>;
                      break;
                      case 'Umbrella':
                      output = <i className="fa-regular fa-snowflake"></i>;
                      break;
                    default:
                      output = <></>;
                  }
                 
                  return (<>
                      <div className="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}                
                      <div className="text-xs">
                        <p>{props.thingstotake[index].inc}</p>
                      </div>
                    </div>
                  </>)
                })

              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thingstoknow
