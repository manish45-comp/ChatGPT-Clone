import ChatContainer from "./components/ChatContainer";
import PromptInput from "./components/PromptInput";

const App = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col">
      <ChatContainer />
      <PromptInput value="" onChange="" onSubmit="" />
      <div className="w-full text-center my-2">
        <p className="text-sm text-zinc-500">
          Generative AI may display inaccurate info, including about people
          <a href="#" className="ms-1 text-blue-700 underline">
            Your privacy
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
