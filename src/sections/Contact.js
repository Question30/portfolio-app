import ContactForm from "../components/ContactForm";

export default function Contact () {
    return (
        <section id="contact"  className="text-center bg-light-blueish py-4 ">
            <h2 className="text-5xl mb-4">Contact</h2>
            <p className="text-xl">Get in contact with me</p>
            <ContactForm />
        </section>
    )
}