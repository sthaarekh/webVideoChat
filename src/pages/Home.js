import React, { useEffect, useState } from 'react'
import { useSocket } from '../context/Socket'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const { socket } = useSocket();
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [room, setRoom] = useState();
    const onJoin=()=>[
        socket.emit("join-room", {emailId: email,roomId: room})
    ]
    const joinedRoom=({roomId})=>{
        navigate(`/room/${roomId}`);
    }
    useEffect(()=>{
        socket.on('joined-room', joinedRoom)
    })
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-10 rounded-lg shadow-lg">
    <div className="space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Video Chat App</h1>
      <input type="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" value={room} onChange={e=> setRoom(e.target.value)} placeholder="Enter room code" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input type="submit" onClick={onJoin} value="Enter Room" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 cursor-pointer transition-colors"/>
    </div>
  </div>
</div>

  )
}

export default Home
