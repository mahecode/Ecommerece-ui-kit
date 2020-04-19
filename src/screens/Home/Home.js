import React from 'react';
import {withTheme} from 'styled-components';
import {
  StyledText,
  MarginContainer,
  StyledScrollView,
  StyledView,
} from '../../components/GlobalStyles';
import {
  StyledTextInput,
  TextInputContainer,
  IconContainer,
} from '../Login/LoginStyle';
import SearchIcon from '../../assets/SearchIcon';
import OfferBanner from '../../assets/OfferBanner';
import {FlatList, View, Image} from 'react-native';
import {PRIMARY_COLOR, PLACEHOLDER_COLOR} from '../../Themes/Themes';
import {CategoryRow} from './HomeStyle';
import DressIcon from '../../assets/DressIcon';
import ShirtIcon from '../../assets/ShirtLogo';
import EquipmentIcon from '../../assets/EquipmentIcon';
import ProductCard from '../../components/ProductCard';

const uri =
  'https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png';
const uri1 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmZOPUtr0LJqZzEsce5WqNKZ4DWAHPBAVmz5OUwBSG2ixCDt4B&usqp=CAU';

const Home = (props) => {
  const ImageComp = () => (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'gray',
        borderRadius: 10,
      }}>
      <Image style={{height: 100, width: 100}} source={{uri}} />
    </View>
  );

  return (
    <StyledScrollView theme={props.theme}>
      <StyledView>
        <TextInputContainer theme="16px">
          <IconContainer>
            <SearchIcon />
          </IconContainer>
          <StyledTextInput
            placeholderTextColor={PLACEHOLDER_COLOR}
            placeholder="Search Product"
          />
        </TextInputContainer>
        <MarginContainer theme="32px">
          <OfferBanner />
        </MarginContainer>
      </StyledView>
      <CategoryRow>
        <StyledText
          theme={{color: props.theme.color, weight: 'bold', size: '14px'}}>
          Category
        </StyledText>
        <StyledText
          theme={{weight: 'bold', size: '14px', color: PRIMARY_COLOR}}>
          More Category
        </StyledText>
      </CategoryRow>
      <CategoryRow>
        <ShirtIcon color={props.theme.backgroundColor} />
        <DressIcon color={props.theme.backgroundColor} />
        <EquipmentIcon color={props.theme.backgroundColor} />
        <ShirtIcon />
      </CategoryRow>
      <CategoryRow>
        <StyledText
          theme={{color: props.theme.color, weight: 'bold', size: '14px'}}>
          Flash Sale
        </StyledText>
        <StyledText
          theme={{weight: 'bold', size: '14px', color: PRIMARY_COLOR}}>
          See More
        </StyledText>
      </CategoryRow>
      <MarginContainer theme="12px">
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6]}
          renderItem={() => <ProductCard />}
          ItemSeparatorComponent={() => <View style={{paddingStart: 16}} />}
          horizontal={true}
        />
      </MarginContainer>
      <CategoryRow>
        <StyledText
          theme={{color: props.theme.color, weight: 'bold', size: '14px'}}>
          Mega Sale
        </StyledText>
        <StyledText
          theme={{weight: 'bold', size: '14px', color: PRIMARY_COLOR}}>
          See More
        </StyledText>
      </CategoryRow>
      <MarginContainer theme="12px">
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6]}
          renderItem={() => <ProductCard />}
          ItemSeparatorComponent={() => <View style={{paddingStart: 16}} />}
          horizontal={true}
        />
      </MarginContainer>
    </StyledScrollView>
  );
};

export default withTheme(Home);
