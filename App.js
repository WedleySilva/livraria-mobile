import { StyleSheet, FlatList, Image, Text, View, ScrollView, Button} from 'react-native';
import React, { useState } from 'react';

function Card(props) {
  return (
   
    <View style={styles.card}>
      <Image
        style={{
        resizeMode: 'stretch',
        width: '100%',
        height: 200,
        marginBottom: 10, 
        }}
        source={{ uri: props.livro.capa }}
      />
      <Text style={{ fontSize:20, color:'#fff' }}>{props.livro.titulo}</Text>
      <Text style={{ fontSize:20, color:'#fff' }}>R${props.livro.preco.toString()}</Text>
      <View style={{marginTop: 10}}>
      <Button title="Remover" onPress={() => props.removeLivro(props.livro)} />
      </View>
    </View>
  );
}

export default function App() {

  const [livros, setLivros] = useState([
    {
     id: '1',
     capa:'https://m.media-amazon.com/images/I/71Zy2zMjZ+L.jpg',
     titulo:'Manifesto Comunista',
     preco:26.99,
    },
    {
     id: '2',
     capa:'https://m.media-amazon.com/images/I/71Q1upslc3L.jpg',
     titulo:'O fenômeno ignorado',
     preco:58.41,
    },
    {
     id: '3',
     capa:'https://m.media-amazon.com/images/I/51m16bGbahL._SY372_BO1,204,203,200_.jpg',
     titulo:'Bob Esponja',
     preco:11.99,
    },
    {
     id: '4',
     capa:'https://m.media-amazon.com/images/I/51YhcBJ9SRL._SX336_BO1,204,203,200_.jpg',
     titulo:'Mundo Animal',
     preco:14.99,
    },
   {
     id: '5',
     capa:'https://m.media-amazon.com/images/I/51L1V4DpHpL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
     titulo:'Jurassic Park',
     preco:55.49,
    },
    {
     id: '6',
     capa:'https://m.media-amazon.com/images/I/51BeRXEKuWL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
     titulo:'Chainsaw Man',
     preco:34.99,
    },
    {
     id: '7',
     capa:'https://m.media-amazon.com/images/I/51GWG-LjxTL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
     titulo:'A química dos bolos',
     preco:76.99,
    },
  ]);

  const removeLivro = (livro) => {
    const newLivros = livros.filter(item => item.id !== livro.id);
    setLivros(newLivros);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Livraria</Text>
      <View style={styles.content}>
        <FlatList
          data={livros}
          renderItem={({ item }) => <Card livro={item} removeLivro={removeLivro} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrondColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 40,
  },
  content: {
    flex: 1,
    backgroundColor:'#124',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  card:{
    backgroundColor:'#8BAAFA',
    width:'45%',
    alignItems:"center",
    maxHeight:400,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginTop:40,
    
  },
});