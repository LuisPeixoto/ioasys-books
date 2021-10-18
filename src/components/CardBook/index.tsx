import React from 'react';

import {
  Container,
  Book,
  ImageBook,
  Content,
  Title,
  Authors,
  Description,
  DescriptionText,
  ContainerImageBook,
  Header,
} from './styles';

interface Props {
  data: {
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
  };
}

const CardBook: React.FC<Props> = ({ data }) => {
  const authors = Object.values(data.authors);
  return (
    <Container>
      <Book>
        <ContainerImageBook>
          <ImageBook source={{ uri: data.imageUrl }} />
        </ContainerImageBook>
      </Book>

      <Content>
        <Header>
          <Title>{data.title}</Title>
          {authors.map((author, index) => (
            <Authors key={index}>
              {author}
              {index + 1 < authors.length && ','}
            </Authors>
          ))}
        </Header>
        <Description>
          <DescriptionText>{data.pageCount} páginas</DescriptionText>
          <DescriptionText>Editora {data.publisher}</DescriptionText>
          <DescriptionText>Publicado em {data.published}</DescriptionText>
        </Description>
      </Content>
    </Container>
  );
};

export default CardBook;
