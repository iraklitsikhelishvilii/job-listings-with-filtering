interface Skills_div {
  AddInArray: (item: string) => void;
  item: Item2;
}
interface Item2 {
  role: string;
  level: string;
  tools: string[];
  languages: string[];
}

function Skills_div({ AddInArray, item }: Skills_div) {
  return (
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
  );
}

export default Skills_div;
