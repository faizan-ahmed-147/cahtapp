import React from 'react'
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"
import cookies from "universal-cookie"
import ChannelContainer from './Components/ChannelContainer'
import ChannelListContainer from './Components/ChannelListContainer'
import "./App.css"
const apiKey = 'qhf9497y46m7'

const client = StreamChat.getInstance(apiKey)
const App = () => {
  return (
    <div className="app__wrapper">
    <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
    </Chat>
</div>
  )
}

export default App