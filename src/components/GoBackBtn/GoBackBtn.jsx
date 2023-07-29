import { GoBackButton } from './GoBackBtn.styled';

export const GoBackBtn = ({ path, children }) => {
  return <GoBackButton to={path}>{children}</GoBackButton>;
};
