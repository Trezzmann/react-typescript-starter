type randomGender = {
  name: string;
};

type randomMale = randomGender & {
  isMale: boolean;
  isFemale?: never;
};

type randomFemale = randomGender & {
  isFemale: boolean;
  isMale?: never;
};

function RandomGender({ name, isMale, isFemale }: randomMale | randomFemale) {
  return (
    <div>
      {name} {isMale && "is a man"} {isFemale && "is a woman"}
    </div>
  );
}

export default RandomGender;
