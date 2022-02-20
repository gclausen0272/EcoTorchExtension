// import React from "react"

function Report(){
    let report = null

    if (report === null){
        return (<p>Loading...</p>);
      }
    
    return (
    <div className="mx-auto max-w-screen-2xl grid gap-x-8 gap-y-10 grid-cols-1 text-center items-center pb-10">
        <h1>Carbon Emission Report</h1>
        <div className="p-4 text-2xl text-left bg-gray-700 rounded-lg">
          {report}
        </div>

        <div className="width-1/4">
        <RefreshButton />
        </div>
    </div>
    );
}


function RefreshButton(){

  // useEffect(() => {
  //   const fetch = async () => {
  //   window.location.href='/';
  //   }
  //   fetch();
  // }, []
  // );

  return (
    <button className="bg-gray-200 text-black rounded-lg" 
    onClick={() => window.location.href='/'}>
    <div className="p-4 text-5xl">
      Refresh
    </div>
    </button>
  );
}