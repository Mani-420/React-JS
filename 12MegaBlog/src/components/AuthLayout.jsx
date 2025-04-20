import React, { userState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Protected({ children, authentication = true }) {
  return <div>AuthLayout</div>;
}
