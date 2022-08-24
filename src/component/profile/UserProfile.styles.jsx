import styled from "styled-components";
import Button from "../../UI/button/button";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;
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

  padding: 10px 0 0 0;
  gap: 10px;
  p {
    padding-top: 5px;
  }
`;
export const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const LogoutButton = styled(Button)`
  border: none;
  height: 40px;
  width: 100%;
`;
