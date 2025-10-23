"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

const quickStats = [
  {
    title: "Overdue Payments",
    value: "23",
    change: "+3",
    trend: "up",
    color: "destructive",
  },
  {
    title: "Due This Week",
    value: "45",
    change: "-2",
    trend: "down",
    color: "secondary",
  },
  {
    title: "Processed Today",
    value: "12",
    change: "+5",
    trend: "up",
    color: "default",
  },
  {
    title: "Pending Approval",
    value: "8",
    change: "0",
    trend: "neutral",
    color: "outline",
  },
]

export function QuickStatsWidget() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
          <CardDescription>
            Key metrics at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {quickStats.map((stat) => (
              <div key={stat.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </span>
                  <Badge variant={stat.color as any}>
                    {stat.trend === "up" && <TrendingUp className="h-3 w-3 mr-1" />}
                    {stat.trend === "down" && <TrendingDown className="h-3 w-3 mr-1" />}
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>3 payments</strong> are overdue and require immediate attention.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Payment Processing</CardTitle>
          <CardDescription>
            Current month performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>On-time Payments</span>
              <span>87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Automated Processing</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="h-4 w-4" />
            <span>All systems operational</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
