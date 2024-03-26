import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const tags: String[] = ["To Do", "Lay", "Activity", "Projects"];
  return (
    <main className="bg-blue-700 h-screen pt-10 pb-1 md:pb-4 px-4 overflow-hidden md:overflow-auto">
      <div className="flex justify-start gap-2">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="p-1 bg-blue-600 rounded-lg text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:ring transform transition hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            >
              {tag}
            </button>
          );
        })}
      </div>
      <h1 className="text-white text-4xl mt-5 ">
        Plan your <br />
        task every <br />
        day
      </h1>
      <Image
        src="/images/undraw_accept_tasks_re_09mv.svg"
        alt="image"
        className="md:mx-auto"
        width={600}
        height={600}
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href={"/login"} className="bg-white text-xl w-[90vw] text-center rounded-lg p-2 mt-5">
          Get Started
        </Link>
        <Link href={"/login"} className="text-white text-lg">
          Alredy have an account? Login
        </Link>
      </div>
    </main>
  );
}
