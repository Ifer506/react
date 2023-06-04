import Notes from "@/components/Notes";

const Hello = (props) => {
  console.log(props);
  const { name, age } = props;
  return (
    <>
      <p>
        Hello {name}, are you {age}?
      </p>
    </>
  );
};

export default function Home() {
  // const now = new Date();
  // const friends = [
  //   { name: "karma", age: "20" },
  //   { name: "sumedha", age: "19" },
  //   { name: "abhinav", age: "18" },
  // ];
  // return (
  //   <div>
  //     <h1>Welcome to react</h1>
  //     <p>It is {now.toString()}</p>
  //     {/* <Hello friends = {friends.name} age = {20} /> */}
  //     {friends.map((friends) => (
  //       <Hello name={friends.name} age={friends.age} />
  //     ))}
  //     <Counter></Counter>
  //     <Feedback />
  //   </div>
  // );

  return (
    <div>
      <Notes />
    </div>
  );
}
