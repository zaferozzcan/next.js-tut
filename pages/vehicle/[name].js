import { useRouter } from "next/router";
export default function name() {
  const router = useRouter();

  return <div>This is {router.query.name}'s car</div>;
}
