import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <h1 className="text-5xl font-medium text-center capitalize">
        How To <span className="text-sky-400">Next JS</span>
      </h1>
      <h2 className="text-3xl font-light capitalize text-center p-5">
        Or How I Learned to Stop Worrying and be da' bomb
      </h2>
      <section>
        <article>
          <h3 className="text-2xl font-medium text-center capitalize p-4 underline underline-offset-4 decoration-4 decoration-slate-400">What This Is</h3>
          <p>This is simply my reference to Next Js. I like to learn by doing, so I decided to create my own micro-reference to the official Next Js docs. If you happen to stumble upon this, feel free to use it if it helps. I apologize that it's not so great to look at, my focus (for now) is just to get the information locked into my skull-o-dex. </p>
        <img className="mx-auto mt-20" width="512" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" title="source: Wikimedia Commons"/>

        </article>
      </section>
    </main>
  );
}
