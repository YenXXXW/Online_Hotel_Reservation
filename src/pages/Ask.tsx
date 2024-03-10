import { useState } from "react";
import LexeAvatarImage from "../assets/Logo.png";
import UserAvatarImage from "../assets/LogoColorInvert.png";

const BotChatCard = ({
  image,
  dialogue,
}: {
  image: string;
  dialogue: string;
}) => {
  return (
    <span className="flex max-w-max shadow-lg bg-white rounded-l-full rounded-r-full my-2 items-start">
      <div>
        {/* Avatar Image */}
        <img
          src={image}
          className="w-8 h-8 rounded-full border-[1px] border-black"
        />
      </div>

      {/* Chat */}
      <div className=" text-md px-3">
        <p className="max-w-[60vw]">{dialogue}</p>
      </div>
    </span>
  );
};

const UserChatCard = ({
  image,
  dialogue,
}: {
  image: string;
  dialogue: string;
}) => {
  return (
    <div className="flex justify-end my-2">
      <span className="flex max-w-max shadow-lg bg-white rounded-l-full rounded-r-full items-start">
        {/* Chat */}
        <div className="text-md px-3">
          <p className="max-w-[60vw]">{dialogue}</p>
        </div>

        <div>
          {/* Avatar Image */}
          <img
            src={image}
            className="w-8 h-8 rounded-full border-[1px] border-black"
          />
        </div>
      </span>
    </div>
  );
};

type Speaker = "bot" | "user";

interface Chat {
  dialogue: string;
  speaker: Speaker;
}

export default function Ask() {
  const IntroChat: Chat = {
    dialogue:
      "Hello I'm Lexe Bot, an automated assistant. How can I help you? ",
    speaker: "bot",
  };

  const [userDialogue, setUserDialogue] = useState("");
  const [chatHistory, setChatHistory] = useState<Chat[]>([IntroChat]);

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
      console.log(botResponse);
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
    <section className="px-5">
      <div className="h-[70vh]">
        {chatHistory.map((chat, i) => {
          if (chat.speaker === "bot") {
            return (
              <div key={i}>
                <BotChatCard dialogue={chat.dialogue} image={LexeAvatarImage} />
              </div>
            );
          } else {
            return (
              <div key={i}>
                <UserChatCard
                  dialogue={chat.dialogue}
                  image={UserAvatarImage}
                />
              </div>
            );
          }
        })}
      </div>

      <form onSubmit={(e) => handleSubmit(e)} className="w-full ">
        <input
          className="border-[1px] shadow-lg py-1 w-3/5 text-md px-2"
          placeholder="Type your message here"
          value={userDialogue}
          onChange={(e) => setUserDialogue(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
    </section>
  );
}
