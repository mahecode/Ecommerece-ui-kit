import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
`;

export const MarginContainer = styled.View`
  margin-top: ${(props) => `${props.theme ? props.theme : '12px'}`};
`;

export const RowContainer = styled.View`
  margin-top: ${(props) => `${props.theme}`};
  flex-direction: row;
  justify-content: ;
`;

export const StyledText = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.weight ? props.theme.weight : 'normal'};
  font-size: ${(props) => (props.theme.size ? props.theme.size : '14px')};
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(props) => (props.theme.color ? props.theme.color : '#223263')};
`;

// BOTTOM TAB STYLES

export const BottomView = styled.View`
  height: 71px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 0.8px;
  border-top-color: #cbcbcb;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const SectionView = styled.TouchableOpacity`
  align-items: center;
`;

// BOTTOM END

// PRODUCT STYLES

export const ProductContainer = styled.View`
  border: 1px solid #ebf0ff;
  align-items: center;
  width: 141px;
  height: 238px;
`;

// END

export const HorizontalSeperator = styled.View`
  width: 100%;
  border: 0.2px solid #cbcbcb;
`;

// ACCOUNT STYLES

export const ListView = styled.View`
  padding-right: 16px;
  padding-left: 16px;
`;
