import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/Currency';
import cls from './CurrencySelect.module.scss';

interface Props {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  disabled?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: Props) => {
  const { t } = useTranslation();

  const { className, value, onChange, disabled } = props;
  const mods: Mods = {};

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames(cls.currenctSelect, mods, [className])}
      options={options}
      label={t('Укажите валюту')}
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}
    />
  );
});
