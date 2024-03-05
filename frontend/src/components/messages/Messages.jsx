/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import SkeletonMessage from '../skeleton/SkeletonMessage';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  //effect na pampascroll pababa sa mga messages tas kapag nag chat ulit kusa nag scroll
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {/* if this is loading the skeleton will render*/}
      {loading && [...Array(3)].map((_, idx) => <SkeletonMessage key={idx} />)}
      {/* if no messages found this will render automatically */}
      {!loading && messages.length === 0 && (
        <div className='flex flex-col items-center justify-center'>
         q <p className='text-center'>Send a message to start a conversation</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
