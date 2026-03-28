function SectionCard({ title, children }) {
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  );
}

export default SectionCard;
