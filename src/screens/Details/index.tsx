import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';
import IconButton from '../../components/IconButton';
import {
  Container,
  ContainerImageBook,
  ImageBook,
  Title,
  Authors,
  Icon,
  Description,
  DescriptionTextLeft,
  DescriptionTextRight,
  SectionTitle,
  Content,
  Review,
  ReviewText,
} from './styles';

interface RouteProps {
  route: {
    params: {
      book: {
        id: string;
        title: string;
        description: string;
        authors: object;
        pageCount: string;
        category: string;
        imageUrl: string;
        isbn10: string;
        isbn13: string;
        language: string;
        publisher: string;
        published: string;
      };
    };
  };
}

const Details: React.FC<RouteProps> = ({ route }) => {
  const { book } = route.params;
  const navigation = useNavigation();

  const {
    title,
    description,
    authors,
    imageUrl,
    pageCount,
    publisher,
    published,
    language,
    isbn10,
    isbn13,
    category,
  } = book;

  const data = {
    informations: [
      { title: 'Páginas', value: pageCount },
      { title: 'Editora', value: publisher },
      { title: 'Publicação', value: published },
      { title: 'Idioma', value: language },
      { title: 'Título Original', value: title },
      { title: 'ISBN-10', value: isbn10 },
      { title: 'ISBN-13', value: isbn13 },
      { title: 'Categoria', value: category },
    ],
  };
  const formatedAuthors = authors.toString().split(',').join(', ');

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <IconButton
        IconName="arrow-back-outline"
        onPress={() => navigation.goBack()}
      />

      <ContainerImageBook>
        <ImageBook source={{ uri: imageUrl }} />
      </ContainerImageBook>

      <Content>
        <Title numberOfLines={2}>{title}</Title>
        <Authors>{formatedAuthors}</Authors>

        <SectionTitle>Informações</SectionTitle>
        {data.informations.map(information => (
          <Description key={information.title}>
            <DescriptionTextLeft>{information.title}</DescriptionTextLeft>
            <DescriptionTextRight>{information.value}</DescriptionTextRight>
          </Description>
        ))}

        <SectionTitle>Resenha da editora</SectionTitle>
        <Review>
          <ReviewText>
            <Icon name="quote" /> {description}
          </ReviewText>
        </Review>
      </Content>
    </Container>
  );
};

export default Details;
