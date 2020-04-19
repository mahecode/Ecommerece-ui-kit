import React, {useState} from 'react';
import {
  SubHeading,
  StyledTextInput,
  TextInputContainer,
  StyledButton,
  ButtonText,
  IconContainer,
  SocialLoginContainer,
  SocialLoginText,
  SocialIconContainer,
} from './LoginStyle';
import {
  StyledScrollView,
  MarginContainer,
  StyledView,
  StyledText,
} from '../../components/GlobalStyles';
import AppIcon from '../../assets/AppLogo';
import LineSeperator from '../../assets/LineSeperator';
import MessageIcon from '../../assets/MessageIcon';
import LockIcon from '../../assets/LockIcon';
import GoogleIcon from '../../assets/GoogleIcon';
import FbIcon from '../../assets/FbIcon';
import {AsyncStorage} from 'react-native';
import {withTheme} from 'styled-components';
import {connect} from 'react-redux';
import {toggleTheme, setLogin} from '../../actions';
import {PLACEHOLDER_COLOR} from '../../Themes/Themes';

const Login = (props) => {
  const [formInput, setFormInput] = useState({
    email: {
      error: false,
      focus: false,
      value: '',
    },
    password: {
      error: false,
      focus: false,
      value: '',
    },
  });
  const handleFocusInput = (key) => {
    let newState = formInput;
    newState = {
      ...newState,
      [key]: {
        ...newState.key,
        focus: true,
      },
    };
    setFormInput(newState);
  };
  const handleFormInput = (key, value) => {
    let newState = formInput;
    newState = {
      ...newState,
      [key]: {
        ...newState.key,
        focus: true,
      },
    };
    setFormInput(newState);
    if (key === 'email') {
      const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (REGEX_EMAIL.test(value)) {
        newState[key].error = false;
        newState[key].value = value;
        setFormInput(newState);
      } else {
        newState[key].error = true;
        setFormInput(newState);
      }
    } else {
      newState[key].value = value;
      setFormInput(newState);
    }
  };
  const handleBlur = (key) => {
    let newState = formInput;
    newState = {
      ...newState,
      [key]: {
        ...newState.key,
        focus: false,
      },
    };
    setFormInput(newState);
  };

  return (
    <StyledScrollView theme={props.theme}>
      <StyledView>
        <MarginContainer theme="68px">
          <AppIcon />
        </MarginContainer>
        <MarginContainer theme="16px">
          <StyledText
            theme={{weight: 'bold', size: '16px', color: props.theme.color}}>
            Welcome To Ecommerce UI Kit
          </StyledText>
        </MarginContainer>
        <MarginContainer theme="8px">
          <SubHeading>Sign in to continue</SubHeading>
        </MarginContainer>
        <TextInputContainer theme="8px">
          <IconContainer>
            <MessageIcon
              fillColor={
                formInput.email.focus
                  ? '#40bfff'
                  : formInput.email.focus && formInput.email.error
                  ? '#FB7181'
                  : '#9098B1'
              }
            />
          </IconContainer>
          <StyledTextInput
            placeholderTextColor={PLACEHOLDER_COLOR}
            onChangeText={(value) => handleFormInput('email', value)}
            onFocus={() => handleFocusInput('email')}
            onBlur={() => handleBlur('email')}
            placeholder="Email"
            theme={{color: props.theme.color, focus: formInput.email.focus}}
          />
        </TextInputContainer>
        <TextInputContainer theme="8px">
          <IconContainer>
            <LockIcon
              fillColor={
                formInput.password.focus
                  ? '#40bfff'
                  : formInput.password.focus && formInput.password.error
                  ? '#FB7181'
                  : '#9098B1'
              }
            />
          </IconContainer>
          <StyledTextInput
            placeholderTextColor={PLACEHOLDER_COLOR}
            onChangeText={(value) => handleFormInput('password', value)}
            onFocus={() => handleFocusInput('password')}
            onBlur={() => handleBlur('password')}
            placeholder="Password"
            theme={{color: props.theme.color, focus: formInput.password.focus}}
          />
        </TextInputContainer>
        <StyledButton onPress={() => props.setLogin()}>
          <ButtonText>Login</ButtonText>
        </StyledButton>
        <MarginContainer theme="21px">
          <LineSeperator />
        </MarginContainer>
        <SocialLoginContainer theme="16px">
          <SocialIconContainer>
            <GoogleIcon />
          </SocialIconContainer>
          <SocialLoginText>Login with Google</SocialLoginText>
        </SocialLoginContainer>
        <SocialLoginContainer theme="8px">
          <SocialIconContainer>
            <FbIcon />
          </SocialIconContainer>
          <SocialLoginText>Login with facebook</SocialLoginText>
        </SocialLoginContainer>
        <MarginContainer theme="16px">
          <StyledText theme={{weight: 'bold', size: '12px', color: '#40BFFF'}}>
            Forgot Password?
          </StyledText>
        </MarginContainer>
        <MarginContainer style={{paddingBottom: 20}} theme="8px">
          <StyledText
            theme={{weight: 'normal', size: '12px', color: '#9098B1'}}>
            Don’t have a account?{' '}
            <StyledText
              onPress={() => props.navigation.navigate('Register')}
              theme={{weight: 'bold', size: '12px', color: '#40BFFF'}}>
              Register
            </StyledText>
          </StyledText>
        </MarginContainer>
      </StyledView>
    </StyledScrollView>
  );
};

export default connect(null, {toggleTheme, setLogin})(withTheme(Login));
