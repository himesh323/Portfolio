import { type ReactNode } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}

export function Window({ title, children, className = '', onClose }: WindowProps) {
  return (
    <div className={`window ${className}`}>
      <div className="title-bar">
        <span className="tb-name">{title}</span>
        <div className="tb-dots">
          <span className="c-red" onClick={onClose} style={{ cursor: onClose ? 'pointer' : 'default' }} />
          <span className="c-yellow" />
          <span className="c-green" />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
