import React from 'react';
import {View, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import {
  StyledScrollView,
  MarginContainer,
  StyledText,
  ListView,
  HorizontalSeperator,
} from '../../components/GlobalStyles';
import {withTheme} from 'styled-components';
import UserIcon from '../../assets/UserIcon';
import {PRIMARY_COLOR} from '../../Themes/Themes';
import BagIcon from '../../assets/BagIcon';
import LocationIcon from '../../assets/LocationIcon';
import PaymentIcon from '../../assets/PaymentIcon';
import MoonIcon from '../../assets/MoonIcon';
import {connect} from 'react-redux';
import {toggleTheme} from '../../actions';

const Profile = (props) => {

  const handleButtonTheme = () => {
    if (props.mode === 'light') {
      AsyncStorage.setItem('theme', 'dark');
      props.toggleTheme();
    }
    if (props.mode === 'dark') {
      AsyncStorage.setItem('theme', 'light');
      props.toggleTheme();
    }
  };

  return (
    <StyledScrollView theme={props.theme}>
      <ListView>
        <MarginContainer style={{alignItems: 'flex-start'}} theme="26px">
          <StyledText
            theme={{weight: 'bold', size: '16px', color: props.theme.color}}>
            Account
          </StyledText>
        </MarginContainer>
      </ListView>
      <MarginContainer theme="28px">
        <HorizontalSeperator />
      </MarginContainer>
      <ListView>
        <MarginContainer
          style={{height: 56, flexDirection: 'row'}}
          theme="18px">
          <UserIcon filColor={PRIMARY_COLOR} />
          <View style={{paddingLeft: 16}}>
            <StyledText
              theme={{color: props.theme.color, weight: 'bold', size: '12px'}}>
              Profile
            </StyledText>
          </View>
        </MarginContainer>
        <MarginContainer style={{height: 56, flexDirection: 'row'}} theme="0px">
          <PaymentIcon />
          <View style={{paddingLeft: 16}}>
            <StyledText
              theme={{color: props.theme.color, weight: 'bold', size: '12px'}}>
              Payment
            </StyledText>
          </View>
        </MarginContainer>
        <TouchableOpacity onPress={() => handleButtonTheme()}>
          <MarginContainer
            style={{height: 56, flexDirection: 'row'}}
            theme="0px">
            <MoonIcon />
            <View style={{paddingLeft: 16}}>
              <StyledText
                theme={{
                  color: props.theme.color,
                  weight: 'bold',
                  size: '12px',
                }}>
                {props.mode === 'light'
                  ? 'Switch To Dark Mode'
                  : 'Switch To Light Mode'}
              </StyledText>
            </View>
          </MarginContainer>
        </TouchableOpacity>
      </ListView>
    </StyledScrollView>
  );
};

const mapStateToProps = (state) => ({
  mode: state.session.mode,
});

export default connect(mapStateToProps, {toggleTheme})(withTheme(Profile));
