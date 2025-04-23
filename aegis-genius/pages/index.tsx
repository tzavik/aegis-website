import { useSession, signIn } from 'next-auth/react';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Aegis Genius</h1>
          <p className="mt-2 text-lg">Your AI-powered insurance helper.</p>
          <button
            onClick={() => signIn()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {session ? 'Chat Now' : 'Sign In / Sign Up'}
          </button>
        </section>
        <section className="mt-8">
          <ChatBox />
        </section>
        <section className="mt-8 text-center">
          <h2 className="text-xl">Contact Us</h2>
          <p>Email: aegis.genius@gmail.com</p>
        </section>
      </main>
    </div>
  );
};

export default Home;