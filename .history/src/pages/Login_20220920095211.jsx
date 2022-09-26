import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';

import loginIcon from '../assets/login-icon.svg';
import loginLine from '../assets/login-line.svg';
import { MessageIcon } from '../assets/components/MessageIcon';
import { ViewIcon } from '../assets/components/ViewIcon';
import { CheckboxIcon } from '../assets/components/CheckboxIcon';

export const Login = () => {
  const [isEmailLabelAtTop, setIsEmailLabelAtTop] = useState(false);
  const [shouldColorEmail, setShouldColorEmail] = useState(false);
  const [isPasswordLabelAtTop, setIsPasswordLabelAtTop] = useState(false);
  const [shouldColorPassword, setShouldColorPassword] = useState(false);
  const [shouldViewPassword, setShouldViewPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef();

  const { setAuth, persist, setPersist } = useAuth();
  const postLoginData = useAxios();
  const {
    makeRequest,
    isLoading,
    success,
    errorMessage,
    setErrorMessage,
    data,
  } = postLoginData();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  useEffect(() => {
    passwordRef.current.selectionStart = passwordRef.current.value.length;
    passwordRef.current.selectionEnd = passwordRef.current.value.length;
    passwordRef.current.focus();
  }, [shouldViewPassword]);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    if (success) {
      const accessToken = data.access;
      const refreshToken = data.refresh;

      console.log(data);

      setAuth({ email, accessToken });
      if (persist === 'yes') localStorage.setItem('refresh', refreshToken);
      else sessionStorage.setItem('refresh', refreshToken);

      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    }
  }, [success]);

  const handleFocus = (colorFn, topFn) => {
    colorFn(true);
    topFn(true);
  };

  const handleBlur = (val, colorFn, topFn) => {
    colorFn(false);
    topFn(val ? true : false);
  };

  const handleClick = () => setShouldViewPassword(!shouldViewPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password is required');
      return;
    }

    makeRequest({
      url: '/token/login',
      method: 'POST',
      payload: { email, password },
    });
  };

  return (
    <div className='flex justify-center items-center bg-[#02378B] h-[100vh]'>
      <div className='relative max-w-[463px] bg-[#fff] w-[90%] rounded-[40px] py-[102px] px-[40px]'>
        <p className='absolute left-[0] right-[0] top-[60px] text-center text-[16px] font-[700] text-[#d32518] leading-6'>
          {errorMessage}
        </p>

        <div className='flex justify-center items-center mb-[62.5px]'>
          <img src={loginIcon} alt='icon' className='mr-[10.6px]' />
          <img src={loginLine} alt='icon' className='mr-[9px]' />
          <p className='text-[24px] font-[700] tracking-[-0.006em] text[#02378B] leading-6'>
            LOGIN
          </p>
        </div>

        <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
          <div className='relative mb-[28px]'>
            <input
              ref={emailRef}
              type='email'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() =>
                handleFocus(setShouldColorEmail, setIsEmailLabelAtTop)
              }
              onBlur={() =>
                handleBlur(email, setShouldColorEmail, setIsEmailLabelAtTop)
              }
              className={`rounded-[8px] w-[100%] h-[50px] px-[13px] text-[#808080] tracking-[-0.006em] text-[14px] leading-6 outline-none border-[1px] border-solid ${
                shouldColorEmail ? 'border-[#02378B]' : 'border-[#808080]'
              }`}
            />
            <label
              className={`absolute ${
                isEmailLabelAtTop
                  ? 'top-[0%] text-[9px]'
                  : 'top-[50%] text-[14px]'
              } ${
                shouldColorEmail ? 'text-[#02378B]' : 'text-[#808080]'
              } left-[13px] px-[4px] bg-[#fff] tracking-[-0.006em] leading-6 pointer-events-none translate-y-[-50%] z-[3] duration-200`}
            >
              Email Address
            </label>

            <div className='absolute top-[50%] right-[28.5px] pointer-events-none translate-y-[-50%]'>
              <MessageIcon isFocused={shouldColorEmail} />
            </div>
          </div>

          <div className='relative mb-[46px]'>
            <input
              ref={passwordRef}
              type={shouldViewPassword ? 'text' : 'password'}
              required
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() =>
                handleFocus(setShouldColorPassword, setIsPasswordLabelAtTop)
              }
              onBlur={() =>
                handleBlur(
                  password,
                  setShouldColorPassword,
                  setIsPasswordLabelAtTop
                )
              }
              className={`rounded-[8px] w-[100%] h-[50px] px-[13px] text-[#808080] tracking-[-0.006em] text-[14px] leading-6 outline-none border-[1px] border-solid ${
                shouldColorPassword ? 'border-[#02378B]' : 'border-[#808080]'
              }`}
            />
            <label
              className={`absolute ${
                isPasswordLabelAtTop
                  ? 'top-[0%] text-[9px]'
                  : 'top-[50%] text-[14px]'
              } ${
                shouldColorPassword ? 'text-[#02378B]' : 'text-[#808080]'
              } left-[13px] px-[4px] bg-[#fff] tracking-[-0.006em] leading-6 pointer-events-none translate-y-[-50%] z-[3] duration-200`}
            >
              Password
            </label>

            <div
              onClick={handleClick}
              onFocus={() =>
                handleFocus(setShouldColorPassword, setIsPasswordLabelAtTop)
              }
              onBlur={() =>
                handleBlur(
                  password,
                  setShouldColorPassword,
                  setIsPasswordLabelAtTop
                )
              }
              tabIndex='0'
              className='p-[5px] absolute top-[50%] right-[28.5px] translate-y-[-50%] cursor-pointer'
            >
              <ViewIcon
                isFocused={shouldColorPassword}
                shouldView={shouldViewPassword}
              />
            </div>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type='submit'
            className='bg-[#02378B] text-[12px] rounded-[3px] h-[40px] text-[#fff] tracking-[-0.006em] leading-6 font-[700]'
          >
            {isLoading ? 'Please Wait...' : 'LOGIN'}
          </button>
        </form>

        <div className='flex mt-[8px] justify-between'>
          <div className='relative flex items-center gap-[4.75px]'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                id='remember-me'
                name='remember-me'
                defaultChecked={persist === 'yes' ? true : false}
                className='relative z-[-9999]'
              />

              <div
                className='absolute left-[0] cursor-pointer'
                onClick={() =>
                  setPersist(() => (persist === 'yes' ? 'no' : 'yes'))
                }
              >
                <CheckboxIcon isChecked={persist === 'yes' ? true : false} />
              </div>
            </label>

            <label
              onClick={() =>
                setPersist(() => (persist === 'yes' ? 'no' : 'yes'))
              }
              htmlFor='remember-me'
              className='text-[12px] tracking-[-0.006em] cursor-pointer leading-6 font-[400] text-[#000]'
            >
              Remember Me
            </label>
          </div>

          <Link
            to='/forgot-password'
            className='text-[12px] font-[400] leading-6 text-[#02378B] tracking-[-0.006em]'
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};
