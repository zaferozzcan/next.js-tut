import Link from "next/link";
export default function About() {
  return (
    <div>
      <h1>Index page </h1>
      <p> Index Page</p>
      <Link as="/vehicle/zafer" href="/vehicle/[name]">
        <button>Go to the zafer'car page</button>
      </Link>
    </div>
  );
}
