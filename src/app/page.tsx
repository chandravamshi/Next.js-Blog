import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Welome to blog</h1>
      <p className="leading-8 max-w-[750px] mx-auto">
        This is a simple blog built with Next.js and Tailwind CSS.  You can 
        create, read, update, and delete posts.
      </p>
      
    </main>
  );
}
