import NoChatSelected from './NoChatSelected.jsx';
import Messages from './Messages.jsx';
import MessagesInput from './MessageInput.jsx';
import useConversation from '../../store/useConversation.js';
import { useEffect } from 'react';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  //pang unmount tong useeffect kapag naglog out user
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To</span>{' '}
            <span className='text-gray-900 font-bold'>
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
