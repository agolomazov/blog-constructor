import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // Чтобы браузер открывался автоматически
    open: true,
    // Чтобы работали роуты реакта и пр. библиотек при перезагрузки страницы
    historyApiFallback: true,
    // Hot Module Replacement
    hot: true,
  };
}
