import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const { data: session } = useSession();
  const [chatLogs, setChatLogs] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchChatLogs = async () => {
        const response = await axios.get(`/api/chat-logs?userId=${session.user.id}`);
        setChatLogs(response.data);
      };
      fetchChatLogs();
    }
  }, [session]);

  if (!session) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <div className="mt-4">
        <p><strong>Name:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>Last Login:</strong> {new Date(session.user.lastLogin).toLocaleString()}</p>
      </div>
      <h2 className="mt-6 text-xl font-semibold">Past Chat Logs</h2>
      <ul className="mt-2">
        {chatLogs.map((log) => (
          <li key={log._id} className="border-b py-2">
            <p><strong>{new Date(log.timestamp).toLocaleString()}</strong></p>
            <p>{log.messages[0].text.substring(0, 50)}...</p>
            <a href={`/chat/${log._id}`} className="text-blue-500">View full chat</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;