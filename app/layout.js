import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Experience comfort and luxury at Wild Oasis in Italy. Enjoy modern rooms, top-class amenities, and excellent service. Book your stay now!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
