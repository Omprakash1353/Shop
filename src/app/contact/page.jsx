import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
            Contact Us
          </h1>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      placeholder="Your email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message">Message</label>
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-pink-500" />
                  <p>123 Sweet Street, Candyville, SW 12345</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-pink-500" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-pink-500" />
                  <p>info@sweetdelights.com</p>
                </div>
                <div className="aspect-[16/9] mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095989785!2d-74.00425878428698!3d40.71278704512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1a6d5f0001%3A0x9a9c4b7561b7f624!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1655268702516!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sweet Delights Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
