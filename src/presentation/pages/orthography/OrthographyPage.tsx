import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

export const OrthographyPage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>
          <GptMessage text='Hola, puedes escribir tu texto en espanol y te ayudo con las correciones' />

          <MyMessage text='Hola mundo' />

          <TypingLoader className='fade-in' />
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeholder='Escribe lo que quieras'
        disableCorrections
      />
    </div>
  );
};
