import { useEffect, useRef, useState } from "react";

type homeProps = {
  isLoggedIn: boolean;
  name: string;
  messagesNumber?: number;
};

const Home = (props: homeProps) => {
  const { isLoggedIn, name, messagesNumber = 0 } = props;
  const [count, setCount] = useState(0);

  const interval = useRef<number | undefined>(undefined);
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {count}</h2>
      {isLoggedIn ? (
        <p>
          Welcome {name}, you have {messagesNumber} unread messages!{" "}
        </p>
      ) : (
        <p>Login please !</p>
      )}
    </div>
  );
};

export default Home;
