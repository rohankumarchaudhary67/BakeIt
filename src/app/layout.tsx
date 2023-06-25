import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Bakeit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, ...pageProps }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <ToastContainer position='top-right' limit={2} autoClose={2000} pauseOnHover={false} theme="colored" draggable closeOnClick />
        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>
      </body>
    </html>
  )
}
