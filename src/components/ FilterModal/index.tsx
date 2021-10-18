import React, { useEffect, useState } from 'react';
import { Modal, StatusBar } from 'react-native';
import Button from '../Button';
import IconButton from '../IconButton';
import { categories, years } from './itemsFilter';
import {
  Container,
  Content,
  OptionsContainer,
  Option,
  OptionText,
  Icon,
  Title,
  ContentButton,
} from './styles';

interface Filter {
    category:object,
    published: object,
}

interface Props {
  addFilters: ({}:Filter) => void;
  show: boolean;
  closeModal: () => void
}

const FilterModal: React.FC<Props> = ({ addFilters, show, closeModal }) => {
  const [showModal, setShowModal] = useState(show);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);

  useEffect(() => {toggleModal()}, [show]);

  function handleAddNewCategory(category: string): void {
    setSelectedCategory(oldCategory => [...oldCategory, category]);
  }

  function handleRemoveCategory(category: string): void {
    setSelectedCategory(
      selectedCategory.filter(element => element !== category),
    );
  }

  function handleAddNewYear(year: string): void {
    setSelectedYear(oldYear => [...oldYear, year]);
  }

  function handleRemoveYear(year: string): void {
    setSelectedYear(
      selectedYear.filter(element => element !== year),
    );
  }

  function isActiveFilterYear(option: string): boolean {
    return Object.values(selectedYear).find(element => element === option);
  }

  function isActiveFilterCategory(option: string): boolean {
    return Object.values(selectedCategory).find(element => element === option);
  }

  function toggleModal() {
    setShowModal(!!show);
  }

  function handleFilter(): void {
    const filters = {
      category: selectedCategory,
      published: selectedYear,
    }
    addFilters(filters);
    closeModal()
  }

  return (
    <Modal transparent visible={showModal}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.4)" />
      <Container>
        <Content>
          <Icon>
            <IconButton IconName="close" onPress={closeModal} />
          </Icon>
          <Title>Selecione a categoria</Title>
          <OptionsContainer>
            {categories.map(categorie => (
              <Option
              key={categorie.id}
              isActive={isActiveFilterCategory(categorie.id)}
              onPress={() =>
                isActiveFilterCategory(categorie.id)
                  ? handleRemoveCategory(categorie.id)
                  : handleAddNewCategory(categorie.id)
              }
            >
              <OptionText   isActive={isActiveFilterCategory(categorie.id)}>
                {categorie.value}
              </OptionText>
            </Option>
            ))}

          </OptionsContainer>

          <Title>Selecione o ano</Title>
          <OptionsContainer>
            {years.map(year => (
              <Option
              key={year}
              isActive={isActiveFilterYear(year)}
              onPress={() =>
                isActiveFilterYear(year)
                  ? handleRemoveYear(year)
                  : handleAddNewYear(year)
              }
            >
              <OptionText  isActive={isActiveFilterYear(year)}>
                {year}
              </OptionText>
            </Option>
            ))}

          </OptionsContainer>

          <ContentButton>
            <Button title="Filtrar" onPress={handleFilter} hasBorder />
          </ContentButton>
        </Content>
      </Container>
    </Modal>
  );
};

export default FilterModal;
