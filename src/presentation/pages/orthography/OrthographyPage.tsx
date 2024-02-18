import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);
    //TODO useCase
    setIsLoading(false);
    //TODO agregar el mensaje de isGPT true
  };

  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>
          <GptMessage text='Hola, puedes escribir tu texto en espanol y te ayudo con las correciones' />

          {messages.map((message, index) => {
            return message.isGpt ? (
              <GptMessage key={index} text='Esto es de OpenAI' />
            ) : (
              <MyMessage key={index} text={message.text} />
            );
          })}

          {isLoading && (
            <div className='col-start-1 col-end-12 fade-in'>
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder='Escribe lo que quieras'
        disableCorrections
      />
    </div>
  );
};
