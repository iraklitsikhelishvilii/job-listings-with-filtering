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
import Top_box from "../../__molecules/top_box/Top_box";
import Main_div_content from "../../__molecules/main_div_content/Main_div_content";
import Skills_div from "../../__molecules/skills_div/Skills_div";
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
        <Top_box
          array={array}
          img={img}
          Remove={Remove}
          x_img={x_img}
          Clear={Clear}
        />

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
                  <Main_div_content item={item} dot_img={dot_img} />
                </div>
                <div className="bg-[#B7C4C4] w-[100%] h-[1px] mt-[15px] min-[1250px]:hidden"></div>
                <Skills_div AddInArray={AddInArray} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
