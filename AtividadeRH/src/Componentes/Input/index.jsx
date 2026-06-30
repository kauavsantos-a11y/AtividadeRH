import './style.css';

export default function Input({ label, type = 'text', placeholder = '', value, onChange, icon, note }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          className="styled-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {note && <p className="input-note">{note}</p>}
    </div>
  );
}
