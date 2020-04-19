import styled from 'styled-components/native';

export const SubHeading = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #9098b1;
`;

export const TextInputContainer = styled.View`
  width: 100%;
  margin-top: ${(props) => props.theme};
`;

export const StyledTextInput = styled.TextInput`
  height: 48px;
  padding-horizontal: 50px;
  border: 1px solid ${(props) => (props.theme.focus ? '#40BFFF' : '#cbcbcb')};
  border-radius: 5px;
  width: 100%;
  font-family: Poppins;
  color: ${(props) => props.theme.color};
`;

export const StyledButton = styled.TouchableOpacity`
  height: 57px;
  background-color: #40bfff;
  border-radius: 5px;
  elevation: 5;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 12px;
  left: 16px;
  bottom: 12px;
`;

export const SocialLoginContainer = styled.TouchableOpacity`
  border: 1px solid #cbcbcb;
  height: 57px;
  width: 100%;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme};
`;

export const SocialLoginText = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #9098b1;
`;

export const SocialIconContainer = styled.View`
  position: absolute;
  left: 16px;
  top: 16px;
  bottom: 16px;
`;
