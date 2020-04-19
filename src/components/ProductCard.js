import React from 'react';
import {ProductContainer, StyledText, MarginContainer} from './GlobalStyles';
import {Image} from 'react-native';
import {withTheme} from 'styled-components';
import {PRIMARY_COLOR, RED_COLOR, GRAY_COLOR} from '../Themes/Themes';

const uri = 'https://pngimg.com/uploads/men_shoes/men_shoes_PNG7476.png';

const ProductCard = (props) => {
  return (
    <ProductContainer>
      <MarginContainer theme="16px">
        <Image
          style={{height: 109, width: 109, resizeMode: 'center'}}
          source={{uri}}
        />
      </MarginContainer>
      <MarginContainer style={{paddingLeft: 16, paddingRight: 16}} theme="8px">
        <StyledText
          theme={{color: props.theme.color, weight: 'bold', size: '12px'}}>
          FS - Nike Air Max 270 React...
        </StyledText>
      </MarginContainer>
      <MarginContainer
        style={{alignSelf: 'flex-start', paddingLeft: 16}}
        theme="8px">
        <StyledText
          theme={{color: PRIMARY_COLOR, weight: 'bold', size: '12px'}}>
          ₹299.99
        </StyledText>
      </MarginContainer>
      <MarginContainer
        style={{flexDirection: 'row', alignSelf: 'flex-start', paddingLeft: 16}}
        theme="8px">
        <StyledText
          style={{textDecorationLine: 'line-through'}}
          theme={{color: GRAY_COLOR, weight: 'bold', size: '10px'}}>
          ₹534.99
        </StyledText>
        <StyledText theme={{color: RED_COLOR, weight: 'bold', size: '10px'}}>
          24% Off
        </StyledText>
      </MarginContainer>
    </ProductContainer>
  );
};

export default withTheme(ProductCard);
