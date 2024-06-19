import { useSelector } from "react-redux";
import IconAi from "./common/IconAi";
import { formatText } from "../utils/parser";
import IconGpt from "./common/IconGpt";
const ChatContainer = () => {
  const { data } = useSelector((state) => state.ai);

  return (
    <div className="container chat mx-auto flex-1 pt-16 px-2 flex overflow-x-hidden overflow-y-auto">
      <div className="w-full">
        {data.length > 0 ? (
          data.map((d) => {
            const formattedData = formatText(d.text);
            return (
              <div key={d.id} className="flex flex-col gap-2">
                <div className="px-4 p-2 w-auto flex items-center justify-end">
                  <span className="bg-blue-600 p-2 rounded-md">{d.prompt}</span>
                </div>
                <div className="px-4 p-2 w-auto flex gap-2 items-start justify-start">
                  <span>
                    <IconAi />
                  </span>

                  <div className="bg-zinc-900 p-2 rounded-md">
                    {formattedData.map((section) => (
                      <div key={section.title}>
                        <h2 className="mb-2">{section.title}</h2>
                        <ul>
                          {section.content.map((item) => (
                            <li className="ms-10 mb-1" key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="h-full flex gap-10 flex-col items-center justify-center">
            <IconGpt />
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5">
              <div className="p-2 ps-3 border border-zinc-600 hover:bg-zinc-800 rounded-xl h-24 aspect-video cursor-pointer">
                <i className="fa-solid fa-laptop-code text-red-500"></i>
                <p className="mt-1 text-zinc-400">Make a personal webpage</p>
              </div>
              <div className="p-2 ps-3 border border-zinc-600 hover:bg-zinc-800 rounded-xl h-24 aspect-video cursor-pointer">
                <i className="text-yellow-500 fa-solid fa-lightbulb"></i>
                <p className="mt-1 text-zinc-400">
                  Write a story in my favorite genre
                </p>
              </div>
              <div className="p-2 ps-3 border hidden md:block border-zinc-600 hover:bg-zinc-800 rounded-xl h-24 aspect-video cursor-pointer">
                <i className="text-blue-500 fa-solid fa-graduation-cap"></i>
                <p className="mt-1 text-zinc-400">Quiz me on world capitals</p>
              </div>
              <div className="p-2 ps-3 border hidden md:block border-zinc-600 hover:bg-zinc-800 rounded-xl h-24 aspect-video cursor-pointer">
                <i className="text-purple-500 fa-solid fa-wand-magic-sparkles"></i>
                <p className="mt-1 text-zinc-400">
                  Fun fact about the Roman Empire
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
