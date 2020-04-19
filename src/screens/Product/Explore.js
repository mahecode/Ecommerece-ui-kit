import React from 'react';
import {View, Text} from 'react-native';
import {
  StyledScrollView,
  PaddingView,
  HorizontalSeperator,
  MarginContainer,
  StyledText,
} from '../../components/GlobalStyles';
import {withTheme} from 'styled-components';
import {
  TextInputContainer,
  StyledTextInput,
  IconContainer,
} from '../Login/LoginStyle';
import SearchIcon from '../../assets/SearchIcon';
import {PLACEHOLDER_COLOR, GRAY_COLOR} from '../../Themes/Themes';
import ShirtLogo from '../../assets/ShirtLogo';
import {CategoryRow} from '../Home/HomeStyle';
import DressIcon from '../../assets/DressIcon';
import EquimentIcon from '../../assets/EquipmentIcon';

const Explore = (props) => {
  return (
    <StyledScrollView theme={props.theme}>
      <PaddingView>
        <TextInputContainer theme="16px">
          <IconContainer>
            <SearchIcon />
          </IconContainer>
          <StyledTextInput
            placeholderTextColor={PLACEHOLDER_COLOR}
            placeholder="Search Product"
          />
        </TextInputContainer>
      </PaddingView>
      <MarginContainer theme="16px">
        <HorizontalSeperator />
      </MarginContainer>
      <PaddingView>
        <MarginContainer theme="16px">
          <StyledText
            style={{textAlign: 'left'}}
            theme={{weight: 'bold', size: '14px', color: props.theme.color}}>
            Man Fashion
          </StyledText>
        </MarginContainer>
      </PaddingView>
      <CategoryRow>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
        <View>
          <DressIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Dress
            </StyledText>
          </View>
        </View>
        <View>
          <EquimentIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Equiment
            </StyledText>
          </View>
        </View>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
      </CategoryRow>
      <CategoryRow>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
        <View>
          <DressIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Dress
            </StyledText>
          </View>
        </View>
        <View>
          <EquimentIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Equiment
            </StyledText>
          </View>
        </View>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
      </CategoryRow>
      <PaddingView>
        <MarginContainer theme="16px">
          <StyledText
            style={{textAlign: 'left'}}
            theme={{weight: 'bold', size: '14px', color: props.theme.color}}>
            Woman Fashion
          </StyledText>
        </MarginContainer>
      </PaddingView>
      <CategoryRow>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
        <View>
          <DressIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Dress
            </StyledText>
          </View>
        </View>
        <View>
          <EquimentIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Equiment
            </StyledText>
          </View>
        </View>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
      </CategoryRow>
      <CategoryRow>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
        <View>
          <DressIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Dress
            </StyledText>
          </View>
        </View>
        <View>
          <EquimentIcon color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Equiment
            </StyledText>
          </View>
        </View>
        <View>
          <ShirtLogo color={props.theme.backgroundColor} />
          <View style={{paddingTop: 8}}>
            <StyledText
              theme={{color: GRAY_COLOR, weight: 'normal', size: '10px'}}>
              Shirt
            </StyledText>
          </View>
        </View>
      </CategoryRow>
    </StyledScrollView>
  );
};

export default withTheme(Explore);
