import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <h1 className="text-5xl font-medium text-center capitalize">
        How To Learn <span className="text-sky-400">Next JS</span>
      </h1>
      <section>
        <article>
          <h3 className="text-2xl font-medium text-center capitalize p-4 underline underline-offset-4 decoration-4 decoration-slate-400">What This Is</h3>
          <p>Just building a website to learn Next JS. Next JS is a React framework that allows you to build static and server-side rendered websites. It is a great tool for building websites that are fast and SEO friendly.</p>

        <Image className="mx-auto mt-20" width="512" height="512" alt="React-icon" src="/images/React-icon.svg.png" title="source: https://commons.wikimedia.org/wiki/Main_Page" />

        </article>
      </section>
    </main>
  );
}
