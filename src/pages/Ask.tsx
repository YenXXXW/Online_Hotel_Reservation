import { useState, useRef, useEffect } from "react";
import LexeAvatarImage from "../assets/Logo.png";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const BotChatCard = ({ dialogue }: { image: string; dialogue: string }) => {
  return (
    <div className=" ">
      <span className="px-1 text-md pl-3 shadow-lg text-sm  bg-white max-w-[250px] rounded-r-full rounded-tl-full  items-start border-[1px] border-gray-600">
        {dialogue === "Sure, I can help you with that" ? (
          <Link to="/book">Click here to book</Link>
        ) : (
          dialogue
        )}
      </span>
    </div>
  );
};

const UserChatCard = ({ dialogue }: { dialogue: string }) => {
  return (
    <div className="flex justify-end my-6">
      <span className="flex max-w-[400px] shadow-lg text-white rounded-l-full rounded-tr-full bg-gray-800 items-start">
        {/* Chat */}
        <div className="text-md px-3">
          <p className="max-w-[60vw]">{dialogue}</p>
        </div>
      </span>
    </div>
  );
};

type Speaker = "bot" | "user" | "question";

interface Chat {
  dialogue: string;
  speaker: Speaker;
}

const Question1: Chat = {
  dialogue: "Book a room",
  speaker: "question",
};

const Question2: Chat = {
  dialogue: "Available rooms",
  speaker: "question",
};
const Question3: Chat = {
  dialogue: "Service",
  speaker: "question",
};
const Question4: Chat = {
  dialogue: "help",
  speaker: "question",
};

const IntroChat: Chat = {
  dialogue: "Hello I'm Lexe Bot, an automated assistant. How can I help you? ",
  speaker: "bot",
};

export default function Ask() {
  const ref = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const [userDialogue, setUserDialogue] = useState("");
  const [chatHistory, setChatHistory] = useState<Chat[]>([
    IntroChat,
    Question1,
    Question2,
    Question3,
    Question4,
  ]);

  useEffect(() => {
    if (chatHistory.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [chatHistory.length]);
  const askQuestion = async (chat: Chat) => {
    const userChat: Chat = {
      dialogue: chat.dialogue,
      speaker: "user",
    };
    let BotChat: Chat;
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        body: new URLSearchParams({
          user_input: userChat.dialogue,
        }),
      });
      const botResponse = await response.text();

      BotChat = {
        dialogue: botResponse,
        speaker: "bot",
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      userChat,
      BotChat,
    ]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserDialogue("");
    const userChat: Chat = {
      dialogue: userDialogue,
      speaker: "user",
    };
    let BotChat: Chat;
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        body: new URLSearchParams({
          user_input: userDialogue,
        }),
      });
      const botResponse = await response.text();

      BotChat = {
        dialogue: botResponse,
        speaker: "bot",
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      userChat,
      BotChat,
    ]);
  };

  return (
    <section className="rounded-sm h-[78vh] z-50 w-[50vw] mx-auto  overflow-hidden relative bg-black/45 backdrop-blur-md py-5">
      <div className="bg-white absolute w-full top-0">
        <img src={LexeAvatarImage} className="w-[40px] " />
      </div>
      <div className=" px-1 pt-10 h-full overflow-hidden flex flex-col justify-between">
        <div>
          {chatHistory.map((chat, i) => {
            if (chat.speaker === "question") {
              return (
                <span
                  key={i}
                  onClick={() => {
                    if (chat.dialogue === "Book a room") {
                      navigate("/book");
                    } else {
                      askQuestion(chat);
                    }
                  }}
                  className="cursor-pointer text-md px-3 shadow-lg text-sm  bg-white max-w-[250px] rounded-sm mx-1  items-start border-[1px] border-gray-600  "
                >
                  {chat.dialogue}
                </span>
              );
            }
            if (chat.speaker === "bot") {
              return (
                <div key={i}>
                  <BotChatCard
                    dialogue={chat.dialogue}
                    image={LexeAvatarImage}
                  />
                </div>
              );
            } else {
              return (
                <div key={i}>
                  <UserChatCard dialogue={chat.dialogue} />
                </div>
              );
            }
          })}
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          ref={ref}
          className="w-[40vw] flex items-center bg-white  mt-3"
        >
          <input
            className=" shadow-lg py-1 w-[96%] bottom-4 border-r-[1px] border-slate-400 text-sm px-2 focus:outline-none"
            placeholder="Type your message here"
            value={userDialogue}
            onChange={(e) => setUserDialogue(e.target.value)}
          />
          <button type="submit" className="px-3">
            <FaArrowAltCircleUp />
          </button>
        </form>
      </div>
    </section>
  );
}
