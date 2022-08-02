import React from 'react';

import { FlatList } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

const userName = '';
const userAvatar = require('');
const category = '';
const views = '';

const title = '';
const description = '';

const ListElements = [
    {
        id: '1',
        content: '',
    },
    {
        id: '2',
        content: '',
    }
]

export const ListScreen = () => {
    return (
      <Card
        style={{margin: 5}}
      >
        <Card.Title 
          title={userName} 
          subtitle={'Categoría: ' + category + "  Visitas: " + views}
          left={(props) => <Avatar.Image size={40} source={userAvatar} />} 
        />
        <Card.Title
          title={title}
          subtitle={description}
        />
        <Card.Content>
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
