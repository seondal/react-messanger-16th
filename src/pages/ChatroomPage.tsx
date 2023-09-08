import { Link } from "react-router-dom";

import chatData from "../data/chatData.json";
import { getRoomMembers } from "../hooks/getRoomMembers";
import { ProfileImage } from "../components/Item";

const ChatroomPage = () => {
  const chatrooms = chatData.rooms;

  return (
    <div>
      {chatrooms.map((room) => (
        <Link to={`/chatrooms/${room.roomId}`}>
          <div>
            {getRoomMembers(room.roomId, false).map((member) => (
              <ProfileImage src={`${member.profileImage}`} />
            ))}
            {getRoomMembers(room.roomId, false).map((member) => (
              <span>{member.name}, </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatroomPage;
