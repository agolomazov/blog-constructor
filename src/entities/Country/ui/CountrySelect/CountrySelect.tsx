import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/Country';
import cls from './CountrySelect.module.scss';

interface Props {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  disabled?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: Props) => {
  const { t } = useTranslation();

  const { className, value, onChange, disabled } = props;
  const mods: Mods = {};

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames(cls.currenctSelect, mods, [className])}
      options={options}
      label={t('Укажите страну')}
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}
    />
  );
});
