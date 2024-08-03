import { Link } from "react-router-dom";

const PAGES_LIST = [
  {
    name: "Animation One",
    path: "/animation-one",
  },
  {
    name: "Animation Two",
    path: "/animation-two",
  },
  {
    name: "Animation Three",
    path: "/animation-three",
  },
];

const Home = () => {
  return (
    <div className="w-[100vw] h-screen p-10 bg-zinc-900 text-white/70">
      <h1 className="text-3xl font-semibold underline underline-offset-8 my-5 hover:text-yellow-500 transition-all duration-300 ease-in-out">
        Welcome to Motion One Playground{" "}
        <span className=" inline-block animate-spin duration-300 hover:animate-none duration-500">⚾</span>
      </h1>
      <ul className="list-disc flex flex-col gap-2">
        {PAGES_LIST.map(({ name, path }, index) => {
          return (
            <li
              key={index}
              className="hover:text-red-600 transition-all duration-300 ease-in-out"
            >
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
