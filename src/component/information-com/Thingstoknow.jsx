import React from 'react'

const Thingstoknow = (props) => {
  return (
    <>
      <div class="flex flex-col w-full mt-8">
        <div class="flex flex-col">
          <h2 class="text-2xl  font-bold">Things to know</h2>
          <span class="font-medium text-text">Before you go
          </span>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
          <div class="flex flex-col space-y-4">
            <h3 class="font-bold text-lg">What's included</h3>
            <div class="flex flex-col space-y-2">

              {
                props.inclusion.map((item, index) => {
                  let output;

                  switch (props.inclusion[index].name) {
                    case 'Transport':
                      output = <i class="fa-solid fa-car-side"></i>;
                      break;
                    case 'Accommodation':
                      output = <i class="fa-solid fa-bed"></i>;
                      break;
                      case 'Meals':
                      output = <i class="fa-solid fa-utensils"></i>;
                      break;
                    default:
                      output = <p>No option selected</p>;
                  }
                 
                  return (<>
                      <div class="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}
                      <span class="font-semibold">{props.inclusion[index].name}</span>


                      <div class="text-xs">
                        <p>{props.inclusion[index].inc}</p>
                      </div>
                    </div>
                  </>)
                })

              }           
              
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <h3 class="font-bold text-lg">What's not included</h3>
            <div class="flex flex-col space-y-2">

            {
                props.exclusion.map((item, index) => {
                  let output;

                  switch (props.exclusion[index].name) {
                    case 'expenses':
                      output = <i class="fa-solid fa-hand-holding-dollar"></i>;
                      break;
                    case 'Transport':
                      output = <i class="fa-solid fa-plane-slash"></i>;
                      break;
                      case 'Meals':
                      output = <i class="fa-solid fa-burger"></i>;
                      break;
                    default:
                      output = <></>;
                  }
                 
                  return (<>
                      <div class="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}                
                      <div class="text-xs">
                        <p>{props.exclusion[index].inc}</p>
                      </div>
                    </div>
                  </>)
                })

              }
              
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <h3 class="font-bold text-lg">What to carry</h3><div class="flex flex-col space-y-2">
            {
                props.thingstotake.map((item, index) => {
                  let output;

                  switch (props.thingstotake[index].name) {
                    case 'moisturizer':
                      output = <i class="fa-solid fa-hand-sparkles"></i>;
                      break;
                    case 'hiking':
                      output = <i class="fa-solid fa-person-hiking"></i>;
                      break;
                      case 'Umbrella':
                      output = <i class="fa-regular fa-snowflake"></i>;
                      break;
                    default:
                      output = <></>;
                  }
                 
                  return (<>
                      <div class="flex flex-col p-2 rounded-lg border border-gray-200 space-y-1">
                      {output}                
                      <div class="text-xs">
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
