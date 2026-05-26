import useCounter from '../hooks/useCounter';
import { stats } from '../data/properties';
import './Stats.css';

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(value);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {label === 'Worth Transacted' && <span className="stat-prefix">₹</span>}
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
