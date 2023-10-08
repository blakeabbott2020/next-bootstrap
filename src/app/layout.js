import Navigation from '@/components/Navigation'
import './styles.scss'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
    title: 'Arizona Cactus Sales',
    description: 'Cactus and suculant supplier',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}
