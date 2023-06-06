import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface Props {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: Props) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    name,
    disabled = false,
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((item) => (
        <option value={item.value} key={item.value}>
          {item.content}
        </option>
      )),
    [options]
  );

  return (
    <div className={classNames(cls.wrapper, mods, [className || ''])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={handleChangeSelect}
        name={name}
        aria-label={name}
        disabled={disabled}
      >
        {optionsList}
      </select>
    </div>
  );
});
