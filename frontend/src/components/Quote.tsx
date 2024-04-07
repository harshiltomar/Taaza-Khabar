interface QouteProps {
  type: "signup" | "signin";
}

export const Quote = ({ type }: QouteProps) => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            {type === "signup"
              ? "The creator of this site is so cool. He used react, Typescript prisma and cloudflare too! You should definitely reach out to him"
              : "Hey Explorer ! Welcome back to Taaza Khabar. Signin and get started onto exploreing amazing blogs by people accross the Globe ! "}
          </div>
          <div className="max-w-md text-xl font-semibold text-left mt-4">
            {type === "signup" ? "Chad Harshil Tomar" : "Team TK"}
          </div>
          <div className="max-w-md text-sm font-light text-slate-400">
            {type === "signup"
              ? "Software Engineer | India"
              : "Software Engineer | India"}
          </div>
        </div>
      </div>
    </div>
  );
};
