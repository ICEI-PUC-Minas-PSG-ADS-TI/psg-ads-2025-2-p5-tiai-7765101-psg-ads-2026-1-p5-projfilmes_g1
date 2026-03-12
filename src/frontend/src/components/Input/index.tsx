import './Input.css';

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const Input = ({label, type, placeholder, value, onChange}: InputProps) => {
    return (
        <div className="form-group">
            <label htmlFor="email" className="form-label">{label}</label>
            <input
              id="email"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="form-input"
            />
          </div>
    )
}

export default Input;