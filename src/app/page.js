import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black bg-opacity-50 p-4 rounded-lg">
                Welcome to Sweet Delights
              </h1>
              <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl bg-black bg-opacity-50 p-4 rounded-lg">
                Indulge in our handcrafted confections and experience pure bliss
                in every bite.
              </p>
            </div>
            <Button className="text-white" size="lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Featured Sweets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Chocolate Truffles"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>Chocolate Truffles</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Rich, velvety chocolate truffles
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Fruit Tarts"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>Fruit Tarts</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Fresh, colorful fruit tarts
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Macarons"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>Macarons</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Delicate, flavored macarons
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Sweet Delights
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Sweet Delights, we're passionate about creating the most
                delectable treats. Our master confectioners use only the finest
                ingredients to craft sweets that will tantalize your taste buds
                and bring a smile to your face.
              </p>
              <Button className="w-fit text-white g-orange-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
