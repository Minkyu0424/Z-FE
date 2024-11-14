import { Client } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';

export const useWebSocket = (userTag: string, otherTag: string) => {
  const client = useRef<Client | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    client.current = new Client({
      brokerURL: 'ws://43.203.123.147:8080/ws',
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.current.onConnect = function () {
      console.log('Connected to WebSocket');

      client.current?.subscribe(`/user/${userTag}/chat/private`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prev) => [...prev, receivedMessage]);
      });

      client.current?.subscribe(`/user/${userTag}/chat/read-receipt`, (message) => {
        const updatedMessage = JSON.parse(message.body);
        setMessages((prev) => prev.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg)));
      });

      client.current?.subscribe('/topic/messages', (message) => {
        const payload = JSON.parse(message.body);
        console.log('Received message:', payload);
      });
    };

    client.current.onStompError = function (frame) {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    client.current.activate();

    return () => {
      client.current?.deactivate();
    };
  }, [userTag]);

  const sendMessage = (destination: string, body: any) => {
    if (client.current?.connected) {
      client.current.publish({
        destination: destination,
        body: JSON.stringify(body),
      });
    }
  };

  return { messages, sendMessage };
};
