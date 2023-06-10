import { FC, lazy } from 'react';
import { Props } from './AddCommentForm';

export const AddCommentForm = lazy<FC<Props>>(() => import('./AddCommentForm'));
