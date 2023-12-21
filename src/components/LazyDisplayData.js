import React from "react";

const DisplayData = (props) => {
  const { resData } = props;
  return (
    <div className="w-[250px] ml-6 mt-5 bg-gray-200 p-3 m-10 rounded-lg h-80 hover:bg-gray-300">
      <img
        className="w-full max-h-36"
        src={resData?.thumbnail}
        alt="res-logo"
      />
      <h2 className="mt-2 text-lg">
        <strong>{resData?.title}</strong>
      </h2>
      <h4>{resData?.category}</h4>

      <h4>
        {resData?.description?.length > 50
          ? resData?.description.slice(0, 50) + "..."
          : resData?.description}
      </h4>
    </div>
  );
};

export default DisplayData;
