import React from 'react';
import {View, Text} from 'react-native';
import {
  StyledScrollView,
  StyledText,
  MarginContainer,
  HorizontalSeperator,
  PaddingView,
} from '../../components/GlobalStyles';
import {withTheme} from 'styled-components';
import CartProduct from '../../components/CartProduct';
import {StyledTextInput, StyledButton} from '../Login/LoginStyle';
import Billing from '../../components/Billing';
import {PLACEHOLDER_COLOR} from '../../Themes/Themes';

const Cart = (props) => {
  return (
    <StyledScrollView theme={props.theme}>
      <MarginContainer
        style={{alignSelf: 'flex-start', paddingLeft: 16}}
        theme="26px">
        <StyledText
          theme={{color: props.theme.color, size: '16px', weight: 'bold'}}>
          Your Cart
        </StyledText>
      </MarginContainer>
      <MarginContainer theme="28px">
        <HorizontalSeperator />
      </MarginContainer>
      <PaddingView>
        <CartProduct theme={props.theme} />
        <CartProduct theme={props.theme} />
        <MarginContainer theme="32px">
          <StyledTextInput
            placeholder="Enter Coupon Code"
            placeholderTextColor={PLACEHOLDER_COLOR}
            theme={{color: props.theme.color, height: '56px'}}
          />
          <StyledButton
            style={{
              position: 'absolute',
              height: 56,
              width: 87,
              bottom: 0,
              right: 0,
            }}>
            <StyledText theme={{color: '#fff', size: '12px', weight: 'bold'}}>
              Apply
            </StyledText>
          </StyledButton>
        </MarginContainer>
        <Billing theme={props.theme} />
      </PaddingView>
    </StyledScrollView>
  );
};

export default withTheme(Cart);
