import { BibleReader, YouVersionProvider } from '@youversion/platform-react-ui'
import type { ReactElement } from 'react'

export function YouVersionAppWrapper({ children, appKey }: { children: ReactElement; appKey: string }) {
  return <YouVersionProvider appKey={appKey}>{children}</YouVersionProvider>
}

export function App({ appKey }: { appKey: string }) {
  return (
    <main className="max-h-[calc(100svh-69px)]">
      <YouVersionAppWrapper appKey={appKey}>
        <BibleReader.Root defaultVersionId={3034}>
          <BibleReader.Toolbar />
          <BibleReader.Content />
        </BibleReader.Root>
      </YouVersionAppWrapper>
    </main>
  )
}
