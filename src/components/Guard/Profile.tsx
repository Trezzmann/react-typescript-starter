export type profileProps = {
  name: string;
};

function Profile({ name }: profileProps) {
  return <div>Welcome, {name}</div>;
}

export default Profile;
