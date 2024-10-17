import React from 'react';
import { Link } from 'react-router-dom';
const Account = () => {
  // Dữ liệu mẫu cho danh sách người dùng
  const users = []; // Danh sách người dùng trống

  return (
    <div className="container-fluid p-4">
      <h1 className="h3 mb-4 text-gray-800">Danh sách người dùng</h1>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/src/pages/Account/Add.jsx" className="btn btn-primary hover:bg-blue-400 hover:text-white">Add Account</Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="bg-gray-200">
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Vai trò</th>
                  <th>Ngày Tạo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.createdAt}</td>
                      <td>
                        <a href={`/admin/users/view/${user.id}`} className="btn btn-info btn-sm mx-1">View</a>
                        <a href={`/admin/users/edit/${user.id}`} className="btn btn-warning btn-sm mx-1">Edit</a>
                        <button className="btn btn-danger btn-sm mx-1">Dalete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">Không có dữ liệu</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
