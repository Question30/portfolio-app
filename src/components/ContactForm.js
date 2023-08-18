import emailjs from 'emailjs-com';
import { useRef } from 'react';


export default function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4ybxw79', 'template_mpuvfdu', form.current, 'JkYo0OW8RoEoorI0z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };
    

    return (
        <div className="container mx-auto pt-2 ">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col border rounded py-4 bg-dark-blueish text-dark-blueish">
                <label htmlFor="name" className="my-3 font-semibold"> Name:
                    <input type="text" placeholder="Enter Your Name" id="name" name="name" className="ml-3" required/>
                </label>
                <label htmlFor="email" className="my-3 font-semibold">Email:
                    <input type="email" placeholder="Enter Your Email" id="email" name="email" className="ml-3" required/>
                </label>
                <label htmlFor="message" className="font-semibold mb-3">Message:   </label>
                    <textarea placeholder="Enter Your Message Here" id="message" name="message" className="w-1/2 h-32 mx-auto mb-4" rquired></textarea>
                <input className="border w-1/4 mx-auto bg-greenish-blue text-primary" type="submit" />
            </form>
            <p>*Note this form doesn't actually work yet!</p>
        </div>
    )
}