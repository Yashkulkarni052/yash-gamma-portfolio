
export default function Contact() {
  return (
    <section className="section max-w-xl">
      <h2 className="text-3xl mb-6">Contact</h2>
      <form action="https://formsubmit.co/yashsknashik@gmail.com" method="POST" className="space-y-4">
        <input name="name" placeholder="Name" className="w-full p-3 rounded bg-black/40 border"/>
        <input name="email" placeholder="Email" className="w-full p-3 rounded bg-black/40 border"/>
        <textarea name="message" placeholder="Message" className="w-full p-3 rounded bg-black/40 border"/>
        <button className="px-6 py-3 bg-white text-black rounded-full">Send</button>
      </form>
    </section>
  );
}
