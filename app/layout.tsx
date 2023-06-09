import Footer from './components/footer';
import Header from './components/header';
import './globals.css';
import ThemeProvider from './theme-provider';

export const metadata = {
  title: '大胖猫',
  description: 'Liangxwei的个人博客',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
