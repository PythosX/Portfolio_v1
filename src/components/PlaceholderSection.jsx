import "./PlaceholderSection.css";

export default function PlaceholderSection({ id, eyebrow, heading, body }) {
  return (
    <section id={id} className="placeholder-section">
      <div className="container placeholder-section__inner">
        <p className="placeholder-section__eyebrow">{eyebrow}</p>
        <h2 className="placeholder-section__heading">{heading}</h2>
        <p className="placeholder-section__body">{body}</p>
      </div>
    </section>
  );
}
