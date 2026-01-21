import { YouVersionProvider } from '@youversion/platform-react-ui'
import { type ReactElement } from 'react'

export function App({ children, appKey }: { children: ReactElement; appKey: string }) {
  return (
    <YouVersionProvider appKey={appKey} includeAuth={false}>
      {children}
    </YouVersionProvider>
  )
}
