import { BibleReader, YouVersionAuthButton, YouVersionProvider, useYVAuth } from '@youversion/platform-react-ui'
import { useEffect, type ReactElement } from 'react'

export function YouVersionAppWrapper({ children, appKey }: { children: ReactElement; appKey: string }) {
  // The OAuth flow redirects back to this URL, which must be an allowlisted
  // callback URI on the YouVersion platform app. The provider auto-processes the
  // callback there (it detects `state`/`error` params on mount). Guarded for SSR
  // even though we render client:only.
  const authRedirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/callback` : ''

  return (
    <YouVersionProvider appKey={appKey} includeAuth authRedirectUrl={authRedirectUrl}>
      {children}
    </YouVersionProvider>
  )
}

function CallbackInner() {
  const { auth } = useYVAuth()

  // The provider processes the OAuth token on mount. Hand off to the app only
  // once we're actually authenticated; surface errors instead of silently
  // bouncing back to a signed-out home page.
  useEffect(() => {
    if (!auth.isLoading && auth.isAuthenticated) {
      window.location.replace('/')
    }
  }, [auth.isLoading, auth.isAuthenticated])

  if (!auth.isLoading && auth.error) {
    return <p className="p-8 text-center text-red-600">Sign in failed: {auth.error.message}</p>
  }

  return <p className="p-8 text-center">Signing you in…</p>
}

export function Callback({ appKey }: { appKey: string }) {
  return (
    <YouVersionAppWrapper appKey={appKey}>
      <CallbackInner />
    </YouVersionAppWrapper>
  )
}

export function App({ appKey }: { appKey: string }) {
  return (
    <YouVersionAppWrapper appKey={appKey}>
      <BibleReader.Root defaultVersionId={3034}>
        <BibleReader.Toolbar />
        <BibleReader.Content />
      </BibleReader.Root>
      <div className="flex justify-center p-4">
        {/* `auto` shows Sign In when signed out and Sign Out when signed in.
            `profile` scope is required to get the user's name and photo back;
            without it the token exchange succeeds but no profile is returned,
            so the user never reads as authenticated. */}
        <YouVersionAuthButton mode="auto" scopes={['profile']} />
      </div>
    </YouVersionAppWrapper>
  )
}
