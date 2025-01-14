
import localFont from "next/font/local";
import "./globals.css";
import "../components/Header/styles/Hamburger.css"
import "../components/Header/styles/Header.css"

import { UserProvider } from "@/context/UserContext";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>

  );
}
