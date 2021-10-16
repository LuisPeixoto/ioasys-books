import React from 'react';
import { StatusBar } from 'react-native';
import IconButton from '../../components/Button/IconButton';
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

const Details: React.FC = () => {
  const data = {
    id: '8f41b92c7460b9337660427e',
    title: 'A Culpa é das Estrelas',
    description:
      'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
    authors: ['Jonh Green', 'Jonh Green', 'Jonh Green'],

    informations: [
      { title: 'Páginas', value: 288 },
      { title: 'Editora', value: 'Intrínseca' },
      { title: 'Publicação', value: 2002 },
      { title: 'Idioma', value: 'Inglês' },
      { title: 'Título Original', value: 'A Culpa é das Estrelas' },
      { title: 'ISBN-10', value: '0062856626' },
      { title: 'ISBN-13', value: '978-0062856623' },
      { title: 'Categoria', value: 'Romance' },
    ],
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
  };
  const authors = data.authors.toString().split(',').join(', ');

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <IconButton IconName="arrow-back-outline" />

      <ContainerImageBook>
        <ImageBook source={{ uri: data.imageUrl }} />
      </ContainerImageBook>

      <Content>
        <Title numberOfLines={2}>{data.title}</Title>
        <Authors>{authors}</Authors>

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
            <Icon name="quote" /> {data.description}
          </ReviewText>
        </Review>
      </Content>
    </Container>
  );
};

export default Details;
