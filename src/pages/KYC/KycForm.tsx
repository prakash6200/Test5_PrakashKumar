const AadharKYCForm: React.FC = () => {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
          <h3 className="text-center mb-3">Aadhar KYC Form</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Aadhar Number</label>
              <input type="text" className="form-control" placeholder="Enter your Aadhar number" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Aadhar</label>
              <input type="file" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    );
  };

 export default AadharKYCForm;    