import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-lg font-bold">
        Aegis Genius
      </div>
      <div>
        {session ? (
          <div className="flex items-center">
            <img
              src={session.user.image}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In / Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;