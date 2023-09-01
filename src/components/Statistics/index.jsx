import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id}>
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
