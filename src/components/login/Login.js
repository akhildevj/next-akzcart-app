import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { Store } from 'react-notifications-component';
import { useAuth } from '../../context/authContext';
import { errorNotification, successNotification } from '../../shared/constants';
import { FiLogIn } from 'react-icons/fi';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const { signInWithEmailAndPassword, createUserWithEmailAndPassword } =
    useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) return;

    if (isLogin) {
      try {
        await signInWithEmailAndPassword(email, password);

        const notification = successNotification;
        notification.message = 'Succesfully Logged In.';
        Store.addNotification(notification);

        router.push('/');
      } catch (err) {
        const notification = errorNotification;
        notification.message = 'Login Failed. Please check email and password.';
        Store.addNotification(notification);
      }
    } else {
      const name = nameRef.current.value;
      if (!name) return;

      try {
        const { user } = await createUserWithEmailAndPassword(email, password);

        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: user.uid, name, email }),
        };
        await fetch(`${process.env.NEXT_PUBLIC_URL}/user/signup`, options);

        const notification = successNotification;
        notification.message = 'Succesfully Created User.';
        Store.addNotification(notification);

        router.push('/');
      } catch (err) {
        const notification = errorNotification;
        notification.message = 'Signup Failed.';
        Store.addNotification(notification);
      }
    }
  };

  return (
    <div className='login'>
      <form onSubmit={submitHandler} className='login--form'>
        <Image
          alt='logo'
          src='/logo.png'
          width={180}
          height={45}
          quality={75}
        />
        <p className='login--form-heading'>{isLogin ? 'Login' : 'Signup'}</p>

        {!isLogin && (
          <>
            <label>Name</label>
            <input type='text' ref={nameRef} />
          </>
        )}

        <label>Email</label>

        <input
          type='text'
          ref={emailRef}
          name='Email'
          autoComplete='On'
          autoFocus
          required
        />

        <label>Password</label>
        <input type='text' ref={passwordRef} name='password' required />

        <button className='btn login--button'>
          <div className='svg-wrapper-1'>
            <div className='svg-wrapper'>
              <FiLogIn />
            </div>
          </div>
          <span>{isLogin ? 'Login' : 'Signup'}</span>
        </button>

        <button onClick={() => setIsLogin(!isLogin)} className='login--link'>
          {isLogin ? 'Create an account' : 'Login Instead'}
        </button>
      </form>
    </div>
  );
};

export default Login;
