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
    <div className='md:min-w-[1110px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-transparent px-4 py-4 mb-2 shadow-md'>
            <span className='label-text'> </span>{' '}
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
