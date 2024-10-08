import PromptCard from "./PromptCard";

const Guest = ({ name, desc, data }) => {
  return (
    <section>
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Guest;
