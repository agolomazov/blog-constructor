import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: Props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [carretPosition, setCarretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      setIsFocused(true);
      inputRef?.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (autoFocus && inputRef?.current) {
      inputRef?.current.focus();
    }
  }, [autoFocus]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCarretPosition(event.target.value.length);
  };

  const handleClickLabel = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCarretPosition(e?.target?.selectionStart);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder} onClick={handleClickLabel}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          value={value}
          type={type}
          onChange={handleOnChange}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isFocused && !readonly && (
          <span
            className={cls.caret}
            style={{
              left: `${carretPosition * 9}px`,
            }}
          />
        )}
      </div>
    </div>
  );
});
