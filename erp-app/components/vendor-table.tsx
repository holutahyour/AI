"use client"

import * as React from "react"
import {
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AddVendorDialog } from "@/components/add-vendor-dialog"
import { VendorDetailSheet } from "@/components/vendor-detail-sheet"
import { Checkbox } from "@/components/ui/checkbox"

const vendorData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    email: "billing@techcorp.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94105",
    outstandingAmount: 450000,
    lastPayment: "2024-01-15",
    status: "Active",
    invoices: 12,
  },
  {
    id: 2,
    name: "Manufacturing Inc",
    email: "accounts@manufacturing.com",
    phone: "+1 (555) 234-5678",
    address: "456 Industrial Blvd, Detroit, MI 48201",
    outstandingAmount: 320000,
    lastPayment: "2024-01-10",
    status: "Active",
    invoices: 8,
  },
  {
    id: 3,
    name: "ServicePro Ltd",
    email: "finance@servicepro.com",
    phone: "+1 (555) 345-6789",
    address: "789 Service Ave, Chicago, IL 60601",
    outstandingAmount: 280000,
    lastPayment: "2024-01-12",
    status: "Pending",
    invoices: 15,
  },
  {
    id: 4,
    name: "HealthSys Medical",
    email: "payments@healthsys.com",
    phone: "+1 (555) 456-7890",
    address: "321 Medical Plaza, Boston, MA 02101",
    outstandingAmount: 180000,
    lastPayment: "2024-01-08",
    status: "Active",
    invoices: 6,
  },
  {
    id: 5,
    name: "Global Logistics",
    email: "billing@globallog.com",
    phone: "+1 (555) 567-8901",
    address: "654 Logistics Way, Dallas, TX 75201",
    outstandingAmount: 120000,
    lastPayment: "2024-01-05",
    status: "On Hold",
    invoices: 4,
  },
]

export function VendorTable() {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(vendorData.map(vendor => vendor.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRows(prev => [...prev, id])
    } else {
      setSelectedRows(prev => prev.filter(rowId => rowId !== id))
    }
  }

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
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Vendor Details</CardTitle>
              <CardDescription>
                Manage vendor relationships and outstanding payments
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <AddVendorDialog />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedRows.length === vendorData.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Vendor Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Outstanding Amount</TableHead>
                  <TableHead>Last Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Invoices</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendorData.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(vendor.id)}
                        onCheckedChange={(checked) => handleSelectRow(vendor.id, checked as boolean)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <VendorDetailSheet vendor={vendor}>
                        <Button variant="link" className="h-auto p-0 text-left font-medium">
                          {vendor.name}
                        </Button>
                      </VendorDetailSheet>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{vendor.email}</div>
                        <div className="text-xs text-muted-foreground">{vendor.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      ${vendor.outstandingAmount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {new Date(vendor.lastPayment).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(vendor.status)}
                    </TableCell>
                    <TableCell>
                      {vendor.invoices}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Vendor
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
