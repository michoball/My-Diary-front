import styled from "styled-components";
import Button from "../../UI/button/button";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding-bottom: 5px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding-bottom: 10px;
  border-bottom: 2px solid #d2d2d2;

  svg {
    font-size: 25px;
    margin-right: 5px;
  }
`;
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;

  padding: 10px 0 0 0;

  p {
    padding: 5px 0;
  }
`;
export const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserAvatar = styled.img`
  width: 65px;
  height: 65px;
  border: 2px solid #bbb;
  border-radius: 50%;
`;

export const LogoutButton = styled(Button)`
  border: none;
  height: 40px;
  width: 100%;
`;
