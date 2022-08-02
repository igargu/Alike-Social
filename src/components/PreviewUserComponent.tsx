import React from 'react';

import { Avatar, Card } from 'react-native-paper';

export const PreviewUserComponent = ({ navigation }: {navigation: any}) => {

  const userName = '';
  const userAvatar = require('');

  return (
    <Card style={{padding: 5}}>
    <Card.Title 
        title={userName} 
        left={(props) => <Avatar.Image size={40} source={userAvatar} />} 
      />
      
    </Card>
  );
}
