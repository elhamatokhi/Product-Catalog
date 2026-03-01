export default function Footer() {
  return (
    <footer className="bg-light border-top py-3">
      <div className="container text-center">
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} Simple Product Catalog
        </p>
      </div>
    </footer>
  );
}