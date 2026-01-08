
export default function Skills() {
  const skills = ["Python","JavaScript","HTML","CSS","MySQL","AWS"];
  return (
    <section className="section grid md:grid-cols-3 gap-6">
      {skills.map(s => (
        <div key={s} className="card text-center">{s}</div>
      ))}
    </section>
  );
}
