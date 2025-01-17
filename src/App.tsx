import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import FriendPage from "./pages/FriendPage";
import ChatroomPage from "./pages/ChatroomPage";
import SettingPage from "./pages/SettingPage";
import Chatroom from "./pages/Chatroom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FriendPage />} />
          <Route path="/chatrooms" element={<ChatroomPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
        <Route path="/chatrooms/:id" element={<Chatroom />} />
      </Routes>
    </>
  );
};

export default App;
