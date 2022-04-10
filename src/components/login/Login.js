import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useAuth } from '../../context/authContext';

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
      await signInWithEmailAndPassword(email, password);
      router.push('/');
    } else {
      const name = nameRef.current.value;
      if (!name) return;

      const { user } = await createUserWithEmailAndPassword(email, password);

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.uid, name, email }),
      };
      await fetch(`${process.env.NEXT_PUBLIC_URL}/user/signup`, options);

      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <>
            <label>Name</label>
            <input type="text" ref={nameRef} />
          </>
        )}

        <label>Email</label>
        <input type="text" ref={emailRef} />

        <label>Password</label>
        <input type="text" ref={passwordRef} />

        <button>{isLogin ? 'Login' : 'Signup'}</button>
        <a onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Login Instead'}
        </a>
      </form>
    </div>
  );
};

export default Login;
