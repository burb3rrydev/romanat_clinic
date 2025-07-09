
export default function InsurancesPage() {
  const insurances = [
    "Aetna",
    "Cigna",
    "Cofinity",
    "United Health Care",
    "PHCS / MultiPlan",
    "Blue Cross Blue Shield",
    "First Health Network",
    "Medicaid",
    "Medicare and others..."
  ];

  return (
    <div className="container my-5 px-4 px-md-5">
      <h1 className="text-maroon text-center mb-3">Accepted Health Insurances</h1>
      <p className="text-center mb-4 fs-5 text-secondary">
        Romanat Clinic proudly accepts a wide range of health insurance providers to ensure your access to quality care.
      </p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
        {insurances.map((provider) => (
          <div key={provider} className="col d-flex align-items-stretch">
            <div className="card w-100 shadow-sm border-0 rounded-3 bg-light p-3 text-center">
              <div className="card-body d-flex align-items-center justify-content-center">
                <p className="card-text fw-semibold mb-0 fs-5">{provider}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
