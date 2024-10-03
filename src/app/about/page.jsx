import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              About Sweet Delights
            </h1>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Sweet Delights Shop"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Our Sweet Story</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sweet Delights was founded in 2010 by passionate confectioners, Sarah and Mike Johnson. What started
                  as a small family-run candy store has grown into a beloved local institution, known for our
                  handcrafted sweets and warm, welcoming atmosphere.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our mission is to bring joy to our community through the art of confectionery. We believe in using
                  only the finest ingredients, time-honored techniques, and a dash of innovation to create treats that
                  delight the senses and warm the heart.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Our Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We source the finest ingredients to ensure every bite is a moment of pure bliss.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Artisanal Craftsmanship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our confectioners are skilled artisans, dedicated to perfecting their craft.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We're proud to be a part of our local community, supporting events and causes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    alt="Sarah Johnson"
                    className="rounded-full mx-auto"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <CardTitle className="text-center mt-4">Sarah Johnson</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">Co-founder & Head Chocolatier</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    alt="Mike Johnson"
                    className="rounded-full mx-auto"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <CardTitle className="text-center mt-4">Mike Johnson</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">Co-founder & Master Pastry Chef</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    alt="Emily Chen"
                    className="rounded-full mx-auto"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <CardTitle className="text-center mt-4">Emily Chen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 dark:text-gray-400">Creative Director</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
  )
}
