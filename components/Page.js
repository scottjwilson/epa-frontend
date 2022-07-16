import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div
      style={{ WebkitTapHighlightColor: "transparent" }}
      className="bg-base-100"
    >
      <Header />
      <main className="min-h-screen ">{children}</main>

      <Footer />
    </div>
  );
}
