import { useState } from "react";
import Data from "../../../Data.json";
import img from "../../../assets/Images/CombinedShape.svg";
import dot_img from "../../../assets/Images/Oval Copy.svg";
import account_logo from "../../../assets/Images/account.svg";
import eyecam_logo from "../../../assets/Images/eyecam.svg";
import facelet_logo from "../../../assets/Images/facelet.svg";
import insure_logo from "../../../assets/Images/insure.svg";
import loopstudios_logo from "../../../assets/Images/loopstudios.svg";
import managa_logo from "../../../assets/Images/managa.svg";
import muhome_logo from "../../../assets/Images/myhome.svg";
import photosnap_logo from "../../../assets/Images/photosnap.svg";
import shortly_logo from "../../../assets/Images/shortly.svg";
import theairfilter_logo from "../../../assets/Images/theairfilter.svg";
import x_img from "../../../assets/Images/x.svg";
type Language = string;

function Main() {
  const [array, setarray] = useState<Language[]>([]);
  const AddInArray = (item: Language) => {
    if (!array.includes(item)) {
      const newarray = [...array, item];
      setarray(newarray);
    }
  };

  const filteredArray = Data.filter((item) => {
    return (
      (array.includes(item.role) ||
        array.includes(item.level) ||
        item.languages.filter((lang) => array.includes(lang)).length > 0 ||
        item.tools.filter((tool) => array.includes(tool)).length > 0) &&
      array.every(
        (filter) =>
          item.role === filter ||
          item.level === filter ||
          item.languages.includes(filter) ||
          item.tools.includes(filter)
      )
    );
  });

  let Info = Data;
  if (array.length > 0) {
    Info = filteredArray;
  }
  const Remove = (index: Language) => {
    const newarray = array.filter((i) => i != index);
    setarray(newarray);
  };
  const Clear = () => {
    setarray([]);
  };
  return (
    <>
      <div
        className={`relative bg-[#EFFAFA] flex    flex-col  w-[100%] h-[100vh] items-center
            `}
      >
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

        <div className="pt-[30px] w-[100%]  overflow-auto mt-[50px] gap-[20px] flex flex-col px-[165px] max-[1250px]:gap-[40px] max-[850px]:px-[24px] items-center  pb-[30px]">
          {Info.map((item, key) => {
            let logo;
            if (item.company === "Photosnap") {
              logo = photosnap_logo;
            } else if (item.company === "Manage") {
              logo = managa_logo;
            } else if (item.company === "Account") {
              logo = account_logo;
            } else if (item.company === "MyHome") {
              logo = muhome_logo;
            } else if (item.company === "Loop Studios") {
              logo = loopstudios_logo;
            } else if (item.company === "FaceIt") {
              logo = facelet_logo;
            } else if (item.company === "Shortly") {
              logo = shortly_logo;
            } else if (item.company === "Insure") {
              logo = insure_logo;
            } else if (item.company === "Eyecam Co.") {
              logo = eyecam_logo;
            } else if (item.company === "The Air Filter Company") {
              logo = theairfilter_logo;
            }
            return (
              <div
                key={key}
                className=" relative max-w-[1110px]  w-[100%] bg-[#fff] rounded-[5px] py-[32px] flex items-center justify-between px-[40px] shadow-[0px_15px_20px_-5px_#0D718226] max-[1250px]:flex-col max-[1250px]:items-start max-[1250px]:gap-[10px]"
              >
                <div className="flex items-center justify-center gap-[15px] ">
                  <img
                    src={logo}
                    alt=""
                    className="max-[1250px]:w-[48px] max-[1250px]:h-[48px] max-[1250px]:absolute max-[1250px]:top-[-25px] left-[24px]"
                  />
                  <div className=" flex flex-col max-[420px]:gap-[12px]">
                    <div className=" flex items-center gap-[10px] max-[1250px]:gap-[33px]">
                      <p className="text-[18px] font-[700] text-[#5CA5A5] max-[420px]:text-[13px]">
                        {item.company}
                      </p>
                      <div className="flex gap-[8px]">
                        {item.new && (
                          <div className="w-[51px] h-[24px] rounded-[12px] bg-[#5CA5A5] flex items-center justify-center">
                            <p className="text-[14px] font-[700] text-[#fff]">
                              NEW!
                            </p>
                          </div>
                        )}
                        {item.featured && (
                          <div className="px-[8px] h-[24px] rounded-[12px] bg-[#2B3939] flex items-center justify-center">
                            <p className="text-[14px] font-[700] text-[#fff]">
                              FEATURED
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-[22px] text-[#2B3939] font-[700]  max-[420px]:text-[15px] hover:text-[#5CA5A5] cursor-pointer ease-in-out duration-[0.4s]">
                      {item.position}
                    </p>
                    <div className="flex  items-center gap-[5px]">
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px]  max-[420px]:text-[16px]">
                        {item.postedAt}
                      </p>
                      <img src={dot_img} alt="" />
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px] max-[420px]:text-[16px]">
                        {item.contract}
                      </p>
                      <img src={dot_img} alt="" />
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px] max-[420px]:text-[16px]">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#B7C4C4] w-[100%] h-[1px] mt-[15px] min-[1250px]:hidden"></div>
                <div className=" flex gap-[16px] flex-wrap max-[1250px]:mt-[15px] ">
                  <button
                    onClick={() => AddInArray(item.role)}
                    className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center button"
                  >
                    <p className="text-[18px] font-[700] text-[#5CA5A5] button_p">
                      {item.role}
                    </p>
                  </button>
                  <button className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center button">
                    <p
                      onClick={() => AddInArray(item.level)}
                      className="text-[18px] font-[700] text-[#5CA5A5] button_p"
                    >
                      {item.level}
                    </p>
                  </button>
                  {item.tools.map((tool, key) => (
                    <button
                      onClick={() => AddInArray(tool)}
                      key={key}
                      className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center button"
                    >
                      <p className="text-[18px] font-[700] text-[#5CA5A5] button_p">
                        {tool}
                      </p>
                    </button>
                  ))}
                  {item.languages.map((lang, key) => (
                    <button
                      onClick={() => AddInArray(lang)}
                      key={key}
                      className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center button"
                    >
                      <p className="text-[18px] font-[700] text-[#5CA5A5] button_p">
                        {lang}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
