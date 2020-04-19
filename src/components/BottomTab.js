import React from 'react';
import {BottomView} from './GlobalStyles';
import HomeIcon from '../assets/Home';
import SearchIcon from '../assets/BottomSearch';
import CartIcon from '../assets/CartIcon';
import OfferIcon from '../assets/OfferIcon';
import UserIcon from '../assets/UserIcon';
import {withTheme} from 'styled-components';
import BottomSection from './BottomSection';

const BottomTab = (props) => {
  return (
    <BottomView theme={props.theme}>
      {['Home', 'Explore', 'Cart', 'Offer', 'Profile'].map((ele, index) => (
        <BottomSection
          onPress={() => props.navigation.navigate(ele)}
          key={ele}
          title={ele}
          focus={index === props.state.index}>
          {ele === 'Home' && (
            <HomeIcon
              color={index === props.state.index ? '#40BFFF' : '#9098B1'}
            />
          )}
          {ele === 'Explore' && (
            <SearchIcon
              color={index === props.state.index ? '#40BFFF' : '#9098B1'}
            />
          )}
          {ele === 'Cart' && (
            <CartIcon
              color={index === props.state.index ? '#40BFFF' : '#9098B1'}
            />
          )}
          {ele === 'Offer' && (
            <OfferIcon
              color={index === props.state.index ? '#40BFFF' : '#9098B1'}
            />
          )}
          {ele === 'Profile' && (
            <UserIcon
              filColor={index === props.state.index ? '#40BFFF' : '#9098B1'}
            />
          )}
        </BottomSection>
      ))}
    </BottomView>
  );
};

export default withTheme(BottomTab);
