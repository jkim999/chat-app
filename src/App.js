import { ChatEngine } from 'react-chat-engine';

import ChatFeed from  './components/ChatFeed';
import LoginForm from './components/LoginForm'

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height = "100vh"
            projectID = "0da50c70-eb89-4d71-9ef1-80465dedd36c"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {( chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    );
}

export default App;