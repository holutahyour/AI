import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const vendorData = [
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
    status: "Fair",
    id: "#2",
    net: "Net 60",
    lastPayment: "2024-08-15",
    totalOutstanding: 89000,
  },
  {
    name: "Marketing Gurus",
    status: "Good",
    id: "#3",
    net: "Net 30",
    lastPayment: "2024-09-05",
    totalOutstanding: 72000,
  },
]

export function VendorDetailsList() {
  return (
    <div className="grid gap-6">
      <h3 className="text-lg font-semibold">Vendor Details</h3>
      {vendorData.map((vendor) => (
        <Card key={vendor.id}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{vendor.name}</h4>
                  <Badge
                    variant={
                      vendor.status === "Good" ? "default" : "secondary"
                    }
                  >
                    {vendor.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {vendor.id}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{vendor.net}</span>
                  <span>Last payment: {vendor.lastPayment}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">
                  $
                  {vendor.totalOutstanding.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                  })}
                </p>
                <p className="text-sm text-muted-foreground">
                  Total Outstanding
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
