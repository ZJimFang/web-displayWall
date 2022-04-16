import logo from "./logo.svg";
import "./App.css";
import { app } from "./firebase-config";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//判斷使用者是否登入
// const auth = getAuth();
// const user = auth.currentUser;
// if (user) {
//   console.log("log in");
// } else {
//   console.log("no");
// }

function App() {
  const signInWithGoogle = () => {
    const authentication = getAuth(app);
    const database = getDatabase(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        push(ref(database, "/"), {
          username: re.user.displayName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signInWithGoogle}>Click me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
