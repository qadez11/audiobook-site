export default function BooksPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 15 Ready.
        </p>
      </div>
    </section>
  );
}
