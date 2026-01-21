import { BibleReader, YouVersionProvider } from '@youversion/platform-react-ui'
import type { ReactElement } from 'react'

export function YouVersionAppWrapper({
  children,
  appKey,
  authRedirectUrl,
}: {
  children: ReactElement
  appKey: string
  authRedirectUrl: string
}) {
  return (
    <YouVersionProvider appKey={appKey} includeAuth={true} authRedirectUrl={authRedirectUrl}>
      {children}
    </YouVersionProvider>
  )
}

export function App({ appKey, authRedirectUrl }: { appKey: string; authRedirectUrl: string }) {
  return (
    <YouVersionAppWrapper appKey={appKey} authRedirectUrl={authRedirectUrl}>
      <BibleReader.Root defaultVersionId={3034}>
        <BibleReader.Content />
        <BibleReader.Toolbar />
      </BibleReader.Root>
    </YouVersionAppWrapper>
  )
}
