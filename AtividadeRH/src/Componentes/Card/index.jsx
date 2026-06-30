import { Link } from 'react-router-dom';
import './style.css';

export default function Card({ title, description, icon, actionText, to }) {
  const cardContent = (
    <div className="custom-card">
      <div className="custom-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionText && <span className="card-link">{actionText}</span>}
    </div>
  );

  return to ? <Link to={to} className="card-link-wrapper">{cardContent}</Link> : cardContent;
}
