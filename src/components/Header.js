import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <Container>
      <AppLogo>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </AppLogo>
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
        <NavItems></NavItems>
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
  border: none;
  height: 26px;
  margin: 0 10px;
  border-radius: 4px;
  border: 3px solid #cd9042;
  flex: 1;
  .inp {
    border: none;
    width: 100%;
    border: none;
    height: 26px;
  }
  .searchIcon {
    padding: 5px;
    height: 22px;
    background-color: #cd9042;
    box-shadow: none;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
const NavItems = styled(DeliveryLocation)``;
export default Header;
