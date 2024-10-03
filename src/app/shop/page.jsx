"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../components/ui/sheet"
import { MinusIcon, PlusIcon, ShoppingCartIcon, TrashIcon } from "lucide-react"

const products = [
  { id: 1, name: "Chocolate Truffles", price: 12.99, category: "Chocolates" },
  { id: 2, name: "Fruit Tarts", price: 15.99, category: "Pastries" },
  { id: 3, name: "Macarons", price: 18.99, category: "Cookies" },
  { id: 4, name: "Cupcakes", price: 9.99, category: "Cakes" },
  { id: 5, name: "Caramel Popcorn", price: 7.99, category: "Snacks" },
  { id: 6, name: "Gummy Bears", price: 5.99, category: "Candies" },
  { id: 7, name: "Chocolate Chip Cookies", price: 8.99, category: "Cookies" },
  { id: 8, name: "Lollipops", price: 3.99, category: "Candies" },
]

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [cart, setCart] = useState([])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "All" || product.category === categoryFilter)
  )

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Sweet Shop
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCartIcon className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {totalItems}
                      </span>
                    )}
                    <span className="sr-only">Open cart</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                  </SheetHeader>
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
                  ) : (
                    <>
                      <ul className="divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li key={item.id} className="py-4 flex items-center justify-between">
                            <div>
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <MinusIcon className="h-4 w-4" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <span className="mx-2 w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <PlusIcon className="h-4 w-4" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="ml-2"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                                <span className="sr-only">Remove item</span>
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold">${totalPrice.toFixed(2)}</span>
                      </div>
                      <Button className="w-full mt-4 bg-pink-500 text-white hover:bg-pink-600">
                        Proceed to Checkout
                      </Button>
                    </>
                  )}
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                className="w-full md:w-1/2"
                placeholder="Search products..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-1/4">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Chocolates">Chocolates</SelectItem>
                  <SelectItem value="Pastries">Pastries</SelectItem>
                  <SelectItem value="Cookies">Cookies</SelectItem>
                  <SelectItem value="Cakes">Cakes</SelectItem>
                  <SelectItem value="Snacks">Snacks</SelectItem>
                  <SelectItem value="Candies">Candies</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg"
                      alt={product.name}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{product.category}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <Button className="bg-pink-500 text-white hover:bg-pink-600" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}