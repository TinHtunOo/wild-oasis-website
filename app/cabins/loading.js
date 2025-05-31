import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid justify-center item-center">
      <Spinner />
      <p className="text-xl text-primary-100">Cabin Contents are loading...</p>
    </div>
  );
}
