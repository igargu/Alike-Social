import React from 'react';

import { FlatList } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

const userName = '';
const userAvatar = require('');

const category = '';
const title = '';

// Se podría hacer un bucle para añadir los elementos
const ListElements = [
  {
    id: '1',
    content: '',
  },
  {
    id: '2',
    content: '',
  },
  {
    id: '3',
    content: '',
  }
]

// Falta hacer la navegación hacia la screen de la lista completa
export const PreviewListComponent = ({ navigation }: {navigation: any}) => {
  return (
    <Card 
      style={{margin: 5}}
    >
      <Card.Title 
        title={userName} 
        subtitle={'Categoría: ' + category} 
        left={(props) => <Avatar.Image size={40} source={userAvatar} />} 
      />
      <Card.Content>
        <Title>{title}</Title>
        <FlatList
          data={ListElements}
          keyExtractor={item=>item.id}
          renderItem={({item}) => ( 
            <Paragraph>
              {item.id + " - " + item.content}
            </Paragraph>  
          )}
        />
      </Card.Content>
    </Card>
  );
}
