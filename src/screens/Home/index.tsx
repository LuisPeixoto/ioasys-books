import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import IconButton from '../../components/Button/IconButton';
import CardBook from '../../components/CardBook';
import InputSearch from '../../components/Input/InputSearch';
import Logo from '../../components/Logo';
import { Container, Content, Search, Header, Filter } from './styles';

const Home: React.FC = () => {
  const data = {
    title: 'A Culpa é das Estrelas',
    authors: ['Jonh Green', 'luis'],
    pageCount: 288,
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    publisher: 'Intrínseca',
    published: 2002,
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Content>
        <Header>
          <Logo type="dark" />
          <IconButton IconName="log-out-outline" />
        </Header>

        <Search>
          <InputSearch placeholder="Procure um livro" />
          <Filter name="options-outline" />
        </Search>

        {/* <Books/> */}
        <ScrollView style={{ width: '100%', paddingHorizontal: 16 }}>
          <CardBook data={data} />
          <CardBook data={data} />
          <CardBook data={data} />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Home;
