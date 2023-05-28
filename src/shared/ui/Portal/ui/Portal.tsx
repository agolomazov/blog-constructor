import React, { FC } from 'react';

import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<Props> = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
