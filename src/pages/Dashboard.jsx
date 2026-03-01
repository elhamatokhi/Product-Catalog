export default function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title mb-3">Dashboard</h1>

          <p>
            This area is protected and only accessible to authenticated users.
          </p>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">✔ View account details</li>
            <li className="list-group-item">✔ Manage saved products</li>
            <li className="list-group-item">✔ Access exclusive content</li>
          </ul>

          <div className="alert alert-info mb-0">
            More dashboard features coming soon.
          </div>
        </div>
      </div>
    </div>
  );
}