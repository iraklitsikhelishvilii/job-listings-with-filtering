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
  console.log(array);
  const filteredArray = Data.filter(
    (item) =>
      (item.role && array.includes(item.role)) ||
      (item.level && array.includes(item.level)) ||
      item.languages.some((lang) => array.includes(lang)) ||
      item.tools.some((tool) => array.includes(tool))
  );
  let Info = Data;
  if (array.length > 0) {
    Info = filteredArray;
  }
  const Remove = (index: Language) => {
    const newarray = array.filter((i) => i != index);
    setarray(newarray);
  };
  return (
    <>
      <div
        className={`relative bg-[#EFFAFA] flex    flex-col  w-[100%] ${
          array.length < 3 ? "h-[100vh]" : ""
        }  `}
      >
        <div className="w-[100%]">
          <img className=" w-[100%]" src={img} alt="" />
          {array.length > 0 && (
            <div className="px-[100px] sticky flex-wrap">
              <div className="   flex  bg-[#fff] rounded-[5px] h-[72px]  items-center gap-[15px] px-[30px] shadow-[0px_15px_20px_-5px_#0D718226]  ">
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
                      className="w-[32px] h-[32px] bg-[#2B3939] justify-center items-center flex rounded-[4px]"
                    >
                      <img src={x_img} alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className=" mt-[50px] gap-[20px] flex flex-col px-[100px]">
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
                className="w-[100%] bg-[#fff] rounded-[5px] h-[152px] flex items-center justify-between px-[30px] shadow-[0px_15px_20px_-5px_#0D718226]"
              >
                <div className="flex items-center justify-center gap-[15px]">
                  <img src={logo} alt="" />
                  <div className=" flex flex-col">
                    <div className=" flex items-center gap-[10px]">
                      <p className="text-[18px] font-[700] text-[#5CA5A5]">
                        {item.company}
                      </p>
                      {item.new && (
                        <div className="w-[51px] h-[24px] rounded-[12px] bg-[#5CA5A5] flex items-center justify-center">
                          <p className="text-[14px] font-[700] text-[#fff]">
                            NEW!
                          </p>
                        </div>
                      )}
                      {item.featured && (
                        <div className="w-[79px] h-[24px] rounded-[12px] bg-[#2B3939] flex items-center justify-center">
                          <p className="text-[14px] font-[700] text-[#fff]">
                            FEATURED
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="text-[22px] text-[#2B3939] font-[700]">
                      {item.position}
                    </p>
                    <div className="flex  items-center gap-[5px]">
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px]">
                        {item.postedAt}
                      </p>
                      <img src={dot_img} alt="" />
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px]">
                        {item.contract}
                      </p>
                      <img src={dot_img} alt="" />
                      <p className="text-[18px] font-[500] text-[#7C8F8F] tracking-[-1.4px]">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" flex gap-[10px]">
                  <button
                    onClick={() => AddInArray(item.role)}
                    className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center "
                  >
                    <p className="text-[18px] font-[700] text-[#5CA5A5]">
                      {item.role}
                    </p>
                  </button>
                  <button className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center ">
                    <p
                      onClick={() => AddInArray(item.level)}
                      className="text-[18px] font-[700] text-[#5CA5A5]"
                    >
                      {item.level}
                    </p>
                  </button>
                  {item.tools.map((tool, key) => (
                    <button
                      onClick={() => AddInArray(tool)}
                      key={key}
                      className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center "
                    >
                      <p className="text-[18px] font-[700] text-[#5CA5A5]">
                        {tool}
                      </p>
                    </button>
                  ))}
                  {item.languages.map((lang, key) => (
                    <button
                      onClick={() => AddInArray(lang)}
                      key={key}
                      className=" px-[5px] py-[5px] bg-[rgba(92,165,165,0.1)] items-center justify-center "
                    >
                      <p className="text-[18px] font-[700] text-[#5CA5A5]">
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
