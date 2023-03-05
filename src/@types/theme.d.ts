import 'styled-components'

import { ligthTheme, darkTheme } from '@/styles/themes'

export type Theme = typeof ligthTheme
export type Dark = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
  export interface DarkTheme extends Dark {}
}
