
// import React from "react";

// const AdminFooter = () => {
//   return (
//     <footer className="text-center border-top py-3 shadow-sm mt-auto bg-app">
//       <div className="d-flex justify-content-center align-items-center px-3">
//         <small className="text-muted-app">
//           © {new Date().getFullYear()} EventSphere Admin Panel
//         </small>
//       </div>
//     </footer>
//   );
// };

// export default AdminFooter;import React from "react";
import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-app border-top" style={{ padding: "20px 0", minHeight: "auto" }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <small className="text-muted-app m-0" style={{ fontSize: "15px" }}>
            © {new Date().getFullYear()} EventSphere Admin Panel
          </small>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;