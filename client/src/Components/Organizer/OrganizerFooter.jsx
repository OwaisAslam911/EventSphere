import React from 'react'

const OrganizerFooter = () => {
  return (
    <footer className="bg-app border-top" style={{ padding: "20px 0", minHeight: "auto" }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <small className="text-muted-app m-0" style={{ fontSize: "15px" }}>
            © {new Date().getFullYear()} EventSphere Organizer Panel
          </small>
        </div>
      </div>
    </footer>
  );
}

export default OrganizerFooter