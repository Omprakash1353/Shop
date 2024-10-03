'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { PackageIcon, TruckIcon } from "lucide-react"

const orders = [
  {
    id: "ORD001",
    date: "2023-05-15",
    status: "Delivered",
    total: 45.97,
    items: [
      { id: 1, name: "Chocolate Truffles", quantity: 2, price: 12.99 },
      { id: 2, name: "Fruit Tarts", quantity: 1, price: 15.99 },
    ],
  },
  {
    id: "ORD002",
    date: "2023-06-02",
    status: "Processing",
    total: 34.97,
    items: [
      { id: 3, name: "Macarons", quantity: 1, price: 18.99 },
      { id: 4, name: "Cupcakes", quantity: 2, price: 9.99 },
    ],
  },
  {
    id: "ORD003",
    date: "2023-06-10",
    status: "Shipped",
    total: 22.97,
    items: [
      { id: 5, name: "Caramel Popcorn", quantity: 1, price: 7.99 },
      { id: 6, name: "Gummy Bears", quantity: 2, price: 5.99 },
    ],
  },
]

export default function MyOrdersPage() {
  const [filterStatus, setFilterStatus] = useState("All")

  const filteredOrders = filterStatus === "All"
    ? orders
    : orders.filter(order => order.status === filterStatus)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">Showing {filteredOrders.length} orders</p>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Orders</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="Shipped">Shipped</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Order #{order.id}</CardTitle>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">View Order Details</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Order Details</h4>
                        <p className="text-sm text-muted-foreground">
                          Order #{order.id} placed on {order.date}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <span className="font-medium">Status:</span>
                          <span className="col-span-2">{order.status}</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <span className="font-medium">Total:</span>
                          <span className="col-span-2">${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead className="text-right">Qty</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell className="text-right">{item.quantity}</TableCell>
                              <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <CardDescription>Placed on {order.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {order.status === "Delivered" ? (
                    <PackageIcon className="h-5 w-5 text-green-500 mr-2" />
                  ) : order.status === "Shipped" ? (
                    <TruckIcon className="h-5 w-5 text-blue-500 mr-2" />
                  ) : (
                    <PackageIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  )}
                  <span className="font-medium">{order.status}</span>
                </div>
                <span className="font-bold">${order.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredOrders.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No orders found.</p>
          <Link href="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  )
}