import Accordion from "@/components/Accordion";

export default function Problem() {
  const hurdles: { heading: string; body: string }[] = [
    {
      heading: "Relevance to Your Industry",
      body: 'You might be thinking, "My business is doing just fine without an online footprint. My customers know where to find me." It’s a fair point, especially when your business has been built on solid, traditional grounds.',
    },
    {
      heading: "Fear of Negative Feedback",
      body: "Opening up to the online world means potentially receiving negative reviews or criticism, and that’s a daunting thought. Keeping your reputation spotless feels simpler when you stick to familiar territories.",
    },
    {
      heading: "Digital Literacy",
      body: "Entering the digital space can seem like learning a new language, particularly if you’re not accustomed to the latest tech and online trends. It’s a common barrier many feel when contemplating a move online.",
    },
    {
      heading: "Time Commitment",
      body: "Running a business is a full-time job, and maintaining a website and a vivid online presence could feel like adding another mountain of responsibilities to your already packed schedule.",
    },
    {
      heading: "Privacy and Security Concerns",
      body: "The online world sometimes feels like the wild west with the news of data breaches and privacy concerns. Taking a step into the digital sphere naturally brings up concerns about how to protect your business and customer data.",
    },
    {
      heading: "Overcrowded Market",
      body: "With so many businesses vying for attention online, standing out from the crowd might seem impossible. It feels easier to stick to the paths well-trodden rather than diving into an oversaturated market.",
    },
  ];
  return (
    <section className=" w-full bg-brand-soft-blue py-32">
      <div className="container mx-auto ">
        <h5 className="mb-2">We get it</h5>
        <h1 className="mb-8">The Hurdle</h1>
        <p className="max-w-[70ch]">
          Stepping into the digital arena can feel like a leap of faith,
          especially when you’ve built your business from the ground up. Let’s
          take a moment to acknowledge the valid reservations you might be
          harboring.
        </p>

        <div className="my-12">
          {hurdles.map(({ heading, body }, index) => (
            <Accordion
              className={`border-t border-black ${
                index + 1 === hurdles.length && "border-b"
              }`}
              heading={
                <div className={`flex py-4  text-h5 text-left`}>
                  {index + 1}. {heading}
                </div>
              }
              key={heading}
            >
              <p className="pb-4 text-left">{body}</p>
            </Accordion>
          ))}
        </div>

        <p className="max-w-[50ch] flex ml-auto border-l pl-2 border-black">
          We&apos;re here to acknowledge these concerns, because they are
          genuine and understandable. But it&apos;s also our job to help you see
          the untapped potential and opportunities waiting for you in the
          digital landscape. In the next section, we will share some facts and
          figures that paint a different picture, one of opportunities and
          growth in the online space.
        </p>
      </div>
    </section>
  );
}
