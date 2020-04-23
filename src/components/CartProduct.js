import React from 'react';
import {
  MarginContainer,
  CartProductContainer,
  StyledView,
  StyledText,
} from './GlobalStyles';
import {Image} from 'react-native';
import HeartIcon from '../assets/HeartIcon';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import TrashIcon from '../assets/TrashIcon';
import {PRIMARY_COLOR} from '../Themes/Themes';
import CounterIcon from '../assets/CounterIcon';

const uri = 'https://pngimg.com/uploads/men_shoes/men_shoes_PNG7476.png';

const CartProduct = (props) => {
  const [heart, setHeart] = React.useState(false);
  return (
    <CartProductContainer>
      <MarginContainer theme="16px">
        <Image style={{width: 72, height: 72}} source={{uri}} />
      </MarginContainer>
      <MarginContainer theme="16px">
        <MarginContainer style={{width: 158}} theme="0px">
          <StyledText
            style={{textAlign: 'justify'}}
            theme={{color: props.theme.color, weight: 'bold', size: '12px'}}>
            Nike Air Zoom Pegasus 36 Miami
          </StyledText>
        </MarginContainer>
        <MarginContainer
          style={{paddingTop: 20, alignSelf: 'flex-start'}}
          theme="0">
          <StyledText theme={{color: PRIMARY_COLOR}}>₹299.99</StyledText>
        </MarginContainer>
      </MarginContainer>
      <MarginContainer theme="16px">
        <MarginContainer
          theme="0"
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            paddingRight: 10,
          }}>
          <HeartIcon
            onPress={() => setHeart(!heart)}
            theme={
              heart
                ? {stroke: '#FB7181', fill: '#FB7181'}
                : {stroke: '#9098B1', fill: 'none'}
            }
          />
          <TrashIcon />
        </MarginContainer>
        <MarginContainer style={{paddingTop: 24, paddingRight: 10}} theme="0">
          <CounterIcon />
        </MarginContainer>
      </MarginContainer>
    </CartProductContainer>
  );
};

export default CartProduct;
