import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Container>
      <Link to="/">
        <AppLogo>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </AppLogo>
      </Link>

      <DeliveryLocation>
        <span class="sp1">Deliver to</span>
        <span class="sp2">Bhutan</span>
      </DeliveryLocation>
      <HeadingSearch>
        <input type="text" class="inp" />
        <SearchIcon class="searchIcon" />
      </HeadingSearch>
      <NavMenu>
        <NavItems>
          <span class="sp1">Hello</span>
          <span class="sp2">SignIn</span>
        </NavItems>
        <NavItems>
          <span class="sp1">Returns </span>
          <span class="sp2"> & Orders</span>
        </NavItems>
        <NavItems>
          <span class="sp1">Your</span>
          <span class="sp2">Prime</span>
        </NavItems>
        <Link to="/checkout">
          <CartIcon>
            <ShoppingBasketIcon />
            <span>0</span>
          </CartIcon>
        </Link>
      </NavMenu>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  justify-content: space-evenly;
  top: 0;
  z-index: 100;
`;

const AppLogo = styled.div`
  width: 100px;
  display: flex;
  overflow: hidden;
  margin: 0 20px;
  cursor: pointer;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // maintain aspect ratio
  }
`;

const DeliveryLocation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  .sp1 {
    color: white;
    font-size: 12px;
  }
  .sp2 {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
`;
const HeadingSearch = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 10px;
  border-radius: 4px;
  border: 3px solid #cd9042;
  flex: 1;
  /* border: 3px solid #cd9042; */
  &:active {
  }
  .inp {
    border: none;
    width: 100%;
    border: none;
    height: 40px;
  }
  .searchIcon {
    height: 43px;
    background-color: #e9c46a;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #cd9042;
    }
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const NavItems = styled(DeliveryLocation)`
  margin: 0 10px;
  cursor: pointer;
`;
const CartIcon = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  span {
    margin: 0 20px;
  }
`;

export default Header;
