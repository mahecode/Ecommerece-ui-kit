import React from 'react';
import {MarginContainer, BillingContainer, StyledText} from './GlobalStyles';
import {GRAY_COLOR, PRIMARY_COLOR} from '../Themes/Themes';
import LineBreakSeparator from '../assets/LineBreakSeparator';

const Billing = (props) => {
  return (
    <BillingContainer>
      <MarginContainer
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        theme="16px">
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          Items (3)
        </StyledText>
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          ₹599.98
        </StyledText>
      </MarginContainer>
      <MarginContainer
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        theme="12px">
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          Shipping
        </StyledText>
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          ₹40
        </StyledText>
      </MarginContainer>
      <MarginContainer
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        theme="12px">
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          Import Charges
        </StyledText>
        <StyledText theme={{color: GRAY_COLOR, size: '12px', weight: 'normal'}}>
          ₹100
        </StyledText>
      </MarginContainer>
      <MarginContainer theme="12px">
        <StyledText>--------------------------------------</StyledText>
      </MarginContainer>
      <MarginContainer
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        theme="12px">
        <StyledText
          theme={{color: props.theme.color, size: '12px', weight: 'bold'}}>
          Total Price
        </StyledText>
        <StyledText
          theme={{color: PRIMARY_COLOR, size: '12px', weight: 'bold'}}>
          ₹739.98
        </StyledText>
      </MarginContainer>
    </BillingContainer>
  );
};

export default Billing;
