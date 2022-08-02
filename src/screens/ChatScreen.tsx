import React, {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {Bubble, GiftedChat, IMessage, Send, User} from 'react-native-gifted-chat';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const ChatScreen = () => {
  const initUser: User = {_id:0};
  const initIMessage: IMessage = {_id:0,text:'',createdAt:new Date(),user:initUser};
  const [messages, setMessages] = useState([initIMessage]);

  // Lista de los mensajes
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../assets/snack-icon.png')
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: require('../assets/snack-icon.png')
        },
      },
    ]);
  }, []);

  // Método para devolver los mensajes
  function onSend (messages: IMessage[]): undefined {
    setMessages(messages)
    return undefined
  }

  // Botón para enviar el mensaje
  const renderSend = () => {
    return (
      <Send>
        <View>
          <Ionicons 
            name="send-sharp"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const wrapperStyle = {
    right: {
      backgroundColor: '#2e64e5',
    },
  }
  const textStyle = {
    right: {
      color: '#fff',
    },
  }
  // Para sacarlo como una burbuja el chat
  const renderBubble = () => {
    return (
      <Bubble
        wrapperStyle={wrapperStyle}
        textStyle={textStyle}
      />
    );
  };

  // Cómo se devuelven los mensajes
  return (
    <GiftedChat
      messages={messages}
      onSend={onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
  );
};
