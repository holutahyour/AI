"use client"

import * as React from "react"
import { Calendar, Mail, Phone, MapPin, Building2, DollarSign, FileText, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface VendorDetailSheetProps {
  vendor: {
    id: number
    name: string
    email: string
    phone: string
    address: string
    outstandingAmount: number
    lastPayment: string
    status: string
    invoices: number
  }
  children: React.ReactNode
}

export function VendorDetailSheet({ vendor, children }: VendorDetailSheetProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="default">Active</Badge>
      case "Pending":
        return <Badge variant="secondary">Pending</Badge>
      case "On Hold":
        return <Badge variant="destructive">On Hold</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {vendor.name}
          </SheetTitle>
          <SheetDescription>
            Vendor details and payment information
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-6">
          {/* Status and Basic Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Status</span>
              {getStatusBadge(vendor.status)}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Outstanding</span>
                </div>
                <p className="text-2xl font-semibold">
                  ${vendor.outstandingAmount.toLocaleString()}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Invoices</span>
                </div>
                <p className="text-2xl font-semibold">{vendor.invoices}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{vendor.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{vendor.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{vendor.address}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Payment History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment History</h3>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Last Payment</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(vendor.lastPayment).toLocaleDateString()}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Payment Processing</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Average processing time: 12.5 days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Actions */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                View Invoices
              </Button>
              <Button variant="outline" size="sm">
                <DollarSign className="h-4 w-4 mr-2" />
                Process Payment
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Send Reminder
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Schedule Payment
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
