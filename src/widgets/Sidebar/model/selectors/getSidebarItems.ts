import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebarItems';

export const getSidebarItems = createSelector(getUserAuthData, (authUser) => {
  const items: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная страница',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О нас',
    },
  ];

  if (authUser) {
    items.push(
      {
        path: `${RoutePath.profile}${authUser.id}`,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
      }
    );
  }

  return items;
});
