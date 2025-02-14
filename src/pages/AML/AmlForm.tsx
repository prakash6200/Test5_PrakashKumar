const AMLForm: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">AML Compliance Form</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Nationality</label>
            <input type="text" className="form-control" placeholder="Enter your nationality" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="Enter your address" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Identification Document (Passport/ID)</label>
            <input type="file" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Source of Funds</label>
            <input type="text" className="form-control" placeholder="Enter source of funds" required />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default AMLForm; 