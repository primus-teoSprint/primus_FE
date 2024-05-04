import Providers from '@/_components/providers'
import META_DATA from '@/_constants/meta'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: META_DATA.TITLE,
  description: META_DATA.DESCRIPTION,
  metadataBase: new URL(META_DATA.URL),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
