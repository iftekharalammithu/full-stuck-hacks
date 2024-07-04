import React from "react";

const Booklist = () => {
  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>The Earth</th>
              <th>Nil Amstrong</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booklist;
