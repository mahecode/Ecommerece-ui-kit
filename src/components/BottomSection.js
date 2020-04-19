import React from 'react';
import {SectionView, MarginContainer, StyledText} from './GlobalStyles';

const BottomSection = (props) => {
  return (
    <SectionView onPress={props.onPress}>
      {props.children}
      <MarginContainer theme="4px">
        <StyledText
          theme={{
            weight: 'normal',
            size: '10px',
            color: props.focus ? '#40BFFF' : '#9098B1',
          }}>
          {props.title}
        </StyledText>
      </MarginContainer>
    </SectionView>
  );
};

export default BottomSection;
