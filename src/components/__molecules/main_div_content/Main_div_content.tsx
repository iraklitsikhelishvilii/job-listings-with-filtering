interface Main_Div_Content {
  item: item;
  dot_img: string;
}

interface item {
  company: string;
  new?: boolean;
  featured?: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}
function Main_div_content({ item, dot_img }: Main_Div_Content) {
  return (
    <div className=" flex flex-col max-[420px]:gap-[12px]">
      <div className=" flex items-center gap-[10px] max-[1250px]:gap-[33px]">
        <p className="text-[18px] font-[700] text-[#5CA5A5] max-[420px]:text-[13px]">
          {item.company}
        </p>
        <div className="flex gap-[8px]">
          {item.new && (
            <div className="w-[51px] h-[24px] rounded-[12px] bg-[#5CA5A5] flex items-center justify-center">
              <p className="text-[14px] font-[700] text-[#fff]">NEW!</p>
            </div>
          )}
          {item.featured && (
            <div className="px-[8px] h-[24px] rounded-[12px] bg-[#2B3939] flex items-center justify-center">
              <p className="text-[14px] font-[700] text-[#fff]">FEATURED</p>
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
  );
}

export default Main_div_content;
