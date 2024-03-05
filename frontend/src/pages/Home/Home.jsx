import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-full shadow-md rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
