import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import FilterModal from '../../components/ FilterModal';
import IconButton from '../../components/IconButton';
import CardBook from '../../components/CardBook';
import InputSearch from '../../components/Input/InputSearch';
import Loading from '../../components/Loading';
import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/auth';
import Api from '../../services/api';
import {
  Container,
  Content,
  Search,
  Header,
  Filter,
  ContainerFilter,
  Books,
  Book,
} from './styles';

interface Data {
  id: string;
  title: string;
  description: string;
  authors: object;
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

const Home: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [filter, setFilter] = useState({});
  const [textInput, setTextInput] = useState('');
  const [books, setBooks] = useState<Data>([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  const navigation = useNavigation();

  const { signOut } = useAuth();


  useEffect(() => {
    getBooks();
  }, [isFocused]);

  async function getBooks() {
    try {
      const { data } = await Api.get(`/books?&page=${pageCurrent}`, {
        params: filter,
      });

      if (pageCurrent == 1) {
        setBooks( [...data.data]);
      } else {
          setBooks( [...books,...data.data]);
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addFilter = (Filters): void => {
    setLoading(true)

    setFilter(Filters);
    setPageCurrent(1);
    setBooks([])
    getBooks()
  };

  const handleCloseFilterModal = (): void => {
    setVisibleModal(false);
  };

  const handleInputSearch = (): void => {
    if(textInput!==''){
      addFilter({ title: textInput });
    } else {
      addFilter({})
    }

  };

  const handleOpenFilterModal = (): void => {
    setVisibleModal(true);
  };

   const handleLoadMore = (): void => {
    setLoading(true)
     setPageCurrent(pageCurrent + 1);
     getBooks()
   };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Content>
        <Header>
          <Logo type="dark" />
          <IconButton IconName="log-out-outline" onPress={signOut} />
        </Header>

        <Search>
          <InputSearch
            value={textInput}
            onChangeText={setTextInput}
            onSubmitEditing={handleInputSearch}
            onPress={handleInputSearch}
            placeholder="Procure um livro"
          />

          <ContainerFilter onPress={handleOpenFilterModal}>
            <Filter name="options-outline" />
          </ContainerFilter>
          <FilterModal
            closeModal={handleCloseFilterModal}
            addFilters={addFilter}
            show={visibleModal}
          />
        </Search>

        <Books
          data={books}
          keyExtractor={item => item.id}
          style={{ width: '100%' }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loading ? (<Loading type="dark" />) : null
          }
          renderItem={({ item }) => (
            <>
              <Book
                key={item.id}
                onPress={() => navigation.navigate('Details', { book: item })}
              >
                <CardBook data={item} />

              </Book>
            </>
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
