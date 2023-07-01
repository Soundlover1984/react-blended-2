import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

const iconArray = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <div>
        {title && <StatisticTitle>{title}</StatisticTitle>}

        <StatisticsList>
          {stats.map(({ title, total, id }, index) => (
            <StatisticItem
              icon={iconArray[index]}
              key={id}
              total={total}
              title={title}
            />
          ))}
        </StatisticsList>
      </div>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
