"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

// id is string in BaseProps but string|undefined in HTML attrs — we omit id from HTML attrs
// and re-add it as required string from BaseProps.

interface BaseProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
}

interface InputProps
  extends BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  as?: "input";
}

interface TextareaProps
  extends BaseProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  as: "textarea";
  rows?: number;
}

interface SelectProps
  extends BaseProps,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  as: "select";
  options: { value: string; label: string }[];
  placeholder?: string;
}

type FormFieldProps = InputProps | TextareaProps | SelectProps;

const fieldBase =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150";

export default function FormField(props: FormFieldProps) {
  const { label, id, error, required, hint, as = "input", ...rest } = props;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-blue-600 ml-1">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={(rest as TextareaProps).rows ?? 4}
          className={`${fieldBase} resize-none ${error ? "border-red-400 focus:ring-red-400" : ""}`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === "select" ? (
        <select
          id={id}
          className={`${fieldBase} ${error ? "border-red-400 focus:ring-red-400" : ""}`}
          {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as SelectProps).placeholder && (
            <option value="">{(props as SelectProps).placeholder}</option>
          )}
          {(props as SelectProps).options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={`${fieldBase} ${error ? "border-red-400 focus:ring-red-400" : ""}`}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
