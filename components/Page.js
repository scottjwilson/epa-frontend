import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div
      style={{ WebkitTapHighlightColor: "transparent" }}
      className="bg-base-100"
    >
      <Header />
      <main className="min-h-screen mb-12">{children}</main>

      <Footer />
    </div>
  );
}
