import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

import PropTypes from 'prop-types';

export const ForbesList = ({ list }) => {
  
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
      {list.map(item => {
        return <ForbesListItem key={item.id} avatar={item.avatar}
          name={item.name}
          capital={item.capital}
          isIncrease={ item.isIncrease} />
   })}
  </LeaderBoardProfiles>
  </LeaderBoard>;
  
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired}).isRequired).isRequired,
}