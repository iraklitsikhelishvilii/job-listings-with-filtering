interface top_box_props {
  array: string[];
  img: string;
  Remove: (info: string) => void;
  x_img: string;
  Clear: () => void;
}

function Top_box({ array, img, Remove, x_img, Clear }: top_box_props) {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col ">
      <img className=" w-[100%]" src={img} alt="" />
      {array.length > 0 && (
        <div className="px-[165px] flex  justify-center  w-[100%]  max-[850px]:px-[24px]  ">
          <div className="  flex  max-w-[1110px] w-[100%] bg-[#fff] rounded-[5px]  items-center gap-[15px] px-[30px] shadow-[0px_15px_20px_-5px_#0D718226] justify-between ">
            <div className=" flex  py-[20px] flex-wrap  items-center gap-[15px]    ">
              {array.map((info, key) => (
                <div
                  className="bg-[rgba(92,165,165,0.1)] flex pl-[10px] justify-between items-center rounded-[4px] max-w-[150px] gap-[15px]"
                  key={key}
                >
                  <p className="text-[16px] font-[700] text-[#5CA5A5]">
                    {info}
                  </p>
                  <button
                    onClick={() => Remove(info)}
                    className="w-[32px] h-[32px] bg-[#5CA5A5] justify-center items-center flex rounded-[4px] hover:bg-[#2B3939] ease-in-out duration-[0.4s] cursor-pointer"
                  >
                    <img src={x_img} alt="" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={Clear}
              className="text-[#7C8F8F] text-[16px] font-[700]  cursor-pointer hover:text-[#5CA5A5] hover:underline  ease-in-out duration-[0.4s]"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top_box;
