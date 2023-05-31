import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18n';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export function TranslationDecorator(StoryComponent: Story) {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      <Suspense fallback="">
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  );
}
