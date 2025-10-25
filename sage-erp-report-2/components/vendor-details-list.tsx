"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const vendors = [
  {
    name: "Tech Solutions Inc.",
    status: "Good",
    id: "#1",
    net: "Net 30",
    lastPayment: "2024-09-01",
    totalOutstanding: 145000,
  },
  {
    name: "Office Supplies Co.",
    status: "Good",
    id: "#2",
    net: "Net 15",
    lastPayment: "2024-08-28",
    totalOutstanding: 89000,
  },
  {
    name: "Marketing Pros",
    status: "Good",
    id: "#3",
    net: "Net 30",
    lastPayment: "2024-09-05",
    totalOutstanding: 72000,
  },
  {
    name: "Facility Services",
    status: "Good",
    id: "#4",
    net: "Net 60",
    lastPayment: "2024-08-20",
    totalOutstanding: 58000,
  },
  {
    name: "Legal & Co.",
    status: "Good",
    id: "#5",
    net: "Net 30",
    lastPayment: "2024-09-03",
    totalOutstanding: 45000,
  },
];

export function VendorDetailsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendor Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Net</TableHead>
              <TableHead>Last Payment</TableHead>
              <TableHead className="text-right">Total Outstanding</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell className="font-medium">
                  {vendor.name} <span className="text-muted-foreground">{vendor.id}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{vendor.status}</Badge>
                </TableCell>
                <TableCell>{vendor.net}</TableCell>
                <TableCell>{vendor.lastPayment}</TableCell>
                <TableCell className="text-right">
                  ${vendor.totalOutstanding.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
