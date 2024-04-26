import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <label className="font-label">
            User:
          </label>
          <input type='text' className='form-control' />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label className="font-label">
            Pass:
          </label>
          <input type='text' className='form-control' />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button type= submit className="btn btn-success">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
