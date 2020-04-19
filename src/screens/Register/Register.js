import React, {useState} from 'react';
import {
  TextInputContainer,
  IconContainer,
  StyledTextInput,
  StyledButton,
  ButtonText,
} from '../Login/LoginStyle';
import {
  StyledView,
  MarginContainer,
  StyledScrollView,
  StyledText,
} from '../../components/GlobalStyles';
import {withTheme} from 'styled-components';

import AppIcon from '../../assets/AppLogo';
import MessageIcon from '../../assets/MessageIcon';
import LockIcon from '../../assets/LockIcon';
import UserIcon from '../../assets/UserIcon';

const Register = (props) => {
  const [formInput, setFormInput] = useState({
    name: {
      error: false,
      focus: false,
      value: '',
    },
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
    confirmPassword: {
      error: false,
      focus: false,
      value: '',
    },
  });

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
            Let’s Get Started
          </StyledText>
        </MarginContainer>
        <MarginContainer theme="8px">
          <StyledText
            theme={{weight: 'normal', size: '12px', color: '#9098B1'}}>
            Create an new account
          </StyledText>
        </MarginContainer>
        <TextInputContainer theme="28px">
          <IconContainer>
            <UserIcon
              filColor={
                formInput.name.focus
                  ? '#40bfff'
                  : formInput.name.focus && formInput.name.error
                  ? '#FB7181'
                  : '#9098B1'
              }
            />
          </IconContainer>
          <StyledTextInput
            onChangeText={(value) => handleFormInput('name', value)}
            onFocus={() => handleFocusInput('name')}
            onBlur={() => handleBlur('name')}
            placeholder="Full Name"
            theme={{color: props.theme.color, focus: formInput.name.focus}}
          />
        </TextInputContainer>
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
            onChangeText={(value) => handleFormInput('password', value)}
            onFocus={() => handleFocusInput('password')}
            onBlur={() => handleBlur('password')}
            placeholder="Password"
            theme={{color: props.theme.color, focus: formInput.password.focus}}
          />
        </TextInputContainer>
        <TextInputContainer theme="8px">
          <IconContainer>
            <LockIcon
              fillColor={
                formInput.confirmPassword.focus
                  ? '#40bfff'
                  : formInput.confirmPassword.focus &&
                    formInput.confirmPassword.error
                  ? '#FB7181'
                  : '#9098B1'
              }
            />
          </IconContainer>
          <StyledTextInput
            onChangeText={(value) => handleFormInput('confirmPassword', value)}
            onFocus={() => handleFocusInput('confirmPassword')}
            onBlur={() => handleBlur('confirmPassword')}
            placeholder="Confirm Password"
            theme={{
              color: props.theme.color,
              focus: formInput.confirmPassword.focus,
            }}
          />
        </TextInputContainer>
        <StyledButton>
          <ButtonText>Register</ButtonText>
        </StyledButton>
        <MarginContainer theme="24px">
          <StyledText
            theme={{weight: 'normal', size: '12px', color: '#9098B1'}}>
            have a account?{' '}
            <StyledText
              onPress={() => props.navigation.navigate('Login')}
              theme={{weight: 'bold', size: '12px', color: '#40BFFF'}}>
              Login
            </StyledText>
          </StyledText>
        </MarginContainer>
      </StyledView>
    </StyledScrollView>
  );
};

export default withTheme(Register);
