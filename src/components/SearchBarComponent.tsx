import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import { Searchbar, IconButton, Colors, List } from 'react-native-paper'

// Componente SearchComponent
export const SearchComponent = () => {

  // Lista de categorías
  const categoryList = [
    {
      categoryId: '1',
      categoryTitle: 'Cine',
      categoryIcon: 'movie',
      hasUserSelectedCategory: false,
    },
    {
      categoryId: '2',
      categoryTitle: 'Música',
      categoryIcon: 'music',
      hasUserSelectedCategory: false,
    },
    {
      categoryId: '3',
      categoryTitle: 'Videojuegos',
      categoryIcon: 'gamepad-variant',
      hasUserSelectedCategory: false,
    },
  ]

  // Método para crear un CategoryList por item en la lista de categorías
  const _renderItem = ({ item }: {item: any}) => {
    return (
      <CategoryList
        categoryTitle={item.categoryTitle}
        categoryIcon={item.categoryIcon}
        hasUserSelectedCategory={item.hasUserSelectedCategory}
      />
    );
  };

  // Búsqueda
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => { // { query }: {query: any}
      setSearchQuery(query);
  }

  // Mostrar / Ocultar la lista
  const [shouldShow, setShouldShow] = useState(false);

  // Devolvemos el componente SearchComponent
  return (
    <View>
      <View style={{ alignItems: 'center', flexDirection: 'row', padding:5 }}>
        <View style={{ flex:1, flexDirection: 'row' }}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{margin: 5}}
          />
        </View>
        <View style={{ flex:0, flexDirection: 'row', paddingRight:5 }}>
          <IconButton 
            icon='menu' 
            color={Colors.grey700} 
            size={25} 
            onPress={() => setShouldShow(!shouldShow)}
          />
        </View>
      </View>
      <View>
      { /* Si pulsamos el icono menu se mostrará la FlatList con los CategoryList, al volver a pulsar se ocultará */ }
      {shouldShow ?
        (
          <View style={{ marginLeft:25, marginRight:25, backgroundColor:'white' }}>
            <FlatList data={categoryList} renderItem={_renderItem} />
          </View>
        ) : null
      }
    </View>
    </View>
  );

}

// Componente CategoryList
interface Props {
  categoryTitle: string
  categoryIcon: string
  hasUserSelectedCategory: boolean
}

const CategoryList: React.FC<Props> = ({categoryTitle, categoryIcon, hasUserSelectedCategory}) => {

  // Marcar / Desmarcar la categoría
  const [isCategorySelected, setIsCategorySelected] = useState(hasUserSelectedCategory);
  const selectCategory = () => {
      setIsCategorySelected(!isCategorySelected);
  }

  // Devolvemos el componente CategoryList, dándole los valores de los items de la lista de categorías
  return (
    <List.Item 
      title={categoryTitle} 
      left={props => <List.Icon {...props} icon={categoryIcon} />}
      onPress={() => selectCategory()}
      // Si seleccionamos la categoría aparece el check, al volver a pulsar desaparece
      right={isCategorySelected ? (( props => <List.Icon {...props} icon="check-bold" /> )) : undefined}
      // Si seleccionamos la categoría le damos estilo, al volver a pulsar se lo quitamos
      style={isCategorySelected ? (( styles.categorySelectedStyle )) : undefined}
    />
  );

};

// Estilos del componente
const styles = StyleSheet.create({
  // Estilo al seleccionar una categoría
  categorySelectedStyle: {
    backgroundColor:'rgba(255, 0, 0, 0.6)', 
    margin:5
  },
});
