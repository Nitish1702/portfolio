import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitish Kumar",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    
      <body className={inter.className}>
        {children}
        
      </body>
    </html>
  );
}
