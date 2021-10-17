import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import FilterModal from '../../components/ FilterModal';
import IconButton from '../../components/Button/IconButton';
import CardBook from '../../components/CardBook';
import InputSearch from '../../components/Input/InputSearch';
import Logo from '../../components/Logo';
import {
  Container,
  Content,
  Search,
  Header,
  Filter,
  ContainerFilter,
} from './styles';

const Home: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [filter, setFilter] = useState({});

  console.log(filter);

  function addFilter(Filters) {
    setFilter(Filters);
  }
  const data = {
    title: 'A Culpa é das Estrelas',
    authors: ['Jonh Green', 'luis'],
    pageCount: 288,
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    publisher: 'Intrínseca',
    published: 2002,
  };

  function handleCloseFilterModal(): void {
    setVisibleModal(false);
  }

  function handleOpenFilterModal(): void {
    setVisibleModal(true);
  }

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

          <ContainerFilter onPress={handleOpenFilterModal}>
            <Filter name="options-outline" />
          </ContainerFilter>
          <FilterModal
            closeModal={handleCloseFilterModal}
            addFilters={addFilter}
            show={visibleModal}
          />
        </Search>

        {/* <Books/> */}
        <ScrollView style={{ width: '100%', paddingHorizontal: 16 }}>
          <CardBook data={data} />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Home;
