import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice.js';
import { Button, Input, Logout } from '/index.js';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth.js';

function Login() {
  return <div>Login</div>;
}

export default Login;
