import { useState } from 'react';

import useConversation from '../../store/useConversation';
import toast from 'react-hot-toast';
import useGetConversation from '../../hooks/useGetConversation';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('No user found');
  };
  return (
    <form
      className='flex items-center gap-2 mx-auto mt-50'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search...'
        className='focus:border-[#08AEEA] border-gray-600  rounded-full focus:border-b-2 focus:outline-none text-[16px]  border-2 bg-[#d8d5d5]  text-[#fcfcfc] transition duration-300 ease-in-out py-[10px] px-[20px]     '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className='absolute bottom-0 left-0 w-full h-2  transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-1'></span>
      <button type='submit' className='absolute left-[220px]  text-[#232323]'>
        <FaSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;
