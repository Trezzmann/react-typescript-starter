type homeProps = {
  isLoggedIn: boolean;
  name: string;
  messagesNumber?: number;
};

const Home = (props: homeProps) => {
  const { isLoggedIn, name, messagesNumber = 0 } = props;
  return (
    <div>
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
