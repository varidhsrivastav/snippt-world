import Image from "next/image";
import { mainColor } from "../../Colors";
import { DataObject } from "@mui/icons-material";
import { useAuth } from '@clerk/clerk-react';
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div className={`bg-[${mainColor}]  p-[16px] rounded-md`}>
          <DataObject sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
          <span className="text-slate-600">World</span>
        </div>
      </div>
    </div>
  );
}
function Buttons() {
  const { userId } = useAuth();
  console.log(userId);
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <button
            className={`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
          >
            Access To the app
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <button
            className={`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
          >
            <Link href="/sign-in">
            Sign In
            </Link>
          </button>
          <button
            className={`  text-sm border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}]  hover:text-white rounded-md`}
          >
            <Link href="/sign-up">
            Sign Up
            </Link>
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
        <button className={`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}>
            Sign In
        </button>
        <button className={`  text-sm border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}]  hover:text-white rounded-md`}>
            Sign Up
        </button>
    </div>
  )
}
function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <div className="font-bold text-2xl text-center">
        Organise YOur code
        <span className={`text-[${mainColor}]`}>Efficiently</span>
      </div>
      <p className="Text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
        corporis. At hic nisi doloremque! Odio id ab quis inventore modi.
      </p>
      <button
        className={`block px-9 py-3 text-sm font-medium text-white transition focus:outline-none`}
        type="button"
      >
        {`Let's get started`}
      </button>
    </div>
  );
}
export default function Home() {
  return (
    <main className=" poppins">
      <Navbar />

      <CTASection />
    </main>
  );
}
