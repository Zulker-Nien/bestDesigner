const card = (props:any) => {
  return (
    <div>
      <div className="max-w-md mx-auto flex p-6 bg-white rounded-lg shadow-xl text-black md:my-20 sm:my-20">
        <div className="flex-shrink-0">
          <div className=" flex flex-col w-5/12 md:leading-0 leading-5">
            <h3 className="text-md text-red-300 font-medium">{props.top}</h3>
            <p className="md:text-3xl lg:text-3xl font-bold py-3">
              {props.title}
            </p>
            <p className="mb-10 mt-5 w-96 text-md">
              {props.desc}
            </p>
            <button className="bg-gradient-to-r from-secondary to-primary font-bold text-lg text-black border-2 border-white bg-white px-5 py-3">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
