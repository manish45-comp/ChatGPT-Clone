import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateTextFromPrompt } from "../redux/features/generativeAi/aiSlice";

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ai);

  const handleOnChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    await dispatch(generateTextFromPrompt({ prompt }));
    setPrompt("");
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && prompt.length > 0) {
        handleSubmit();
        setPrompt("");
      }
    };
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [prompt]);

  return (
    <>
      <div className="text-center flex items-center justify-center w-full my-2">
        <div className="relative h-16 mx-2 w-full md:w-3/6">
          <input
            onChange={handleOnChange}
            value={prompt}
            className="outline-none border-none h-full w-full rounded-full  ps-6 bg-zinc-900"
            type="text"
            placeholder="Message ChatGPT"
          />

          <button
            disabled={!prompt.length > 0}
            onClick={handleSubmit}
            className="flex items-center justify-center h-12 aspect-square rounded-full bg-gray-200 text-black absolute top-2 right-2  hover:bg-zinc-500 disabled:bg-zinc-600"
          >
            {!loading ? (
              <i className="fa-solid fa-arrow-up text-2xl font-bold text-zinc-900"></i>
            ) : (
              <span className="loader before:border-4 "></span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PromptInput;
