import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface Props {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
  const { t } = useTranslation();

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={cls.item}>
      <item.Icon className={cls.icon} />
      {!collapsed && <span className={cls.link}>{t(item.text)}</span>}
    </AppLink>
  );
});
