import { type ReactNode, useId } from 'react';

type FieldProps = {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  children?: ReactNode;
};

export function Field({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  options,
  rows = 4,
}: FieldProps) {
  const id = useId();
  const baseInput =
    'w-full bg-transparent border-b px-0 py-3 text-sm font-sans text-forest-700 placeholder:text-charcoal-300/50 transition-colors duration-300 focus:outline-none focus:ring-0';
  const borderClass = error
    ? 'border-red-400 focus:border-red-500'
    : 'border-charcoal-700/20 focus:border-gold-400';
  const labelColor = error ? 'text-red-500' : 'text-charcoal-600';

  return (
    <div className="mb-6">
      <label htmlFor={id} className={`block text-xs font-semibold uppercase tracking-[0.12em] mb-1.5 ${labelColor}`}>
        {label}{required && <span className="text-gold-500 ml-0.5">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseInput} ${borderClass} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`${baseInput} ${borderClass} cursor-pointer`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <option value="">Select an option</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={`${baseInput} ${borderClass}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
