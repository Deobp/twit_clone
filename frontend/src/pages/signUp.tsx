import { useState } from "react"

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="/api/signUp" method="POST">
      <h2>Sign Up</h2>
      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;