"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Text, VStack, Flex, Box } from "@chakra-ui/react";

export function VendorDetailsList() {
  const vendors = [
    {
      id: 1,
      name: "Tech Solutions Inc.",
      status: "Good",
      lastPayment: "2024-09-01",
      outstanding: 145000,
    },
    {
      id: 2,
      name: "Office Supplies Co.",
      status: "Good",
      lastPayment: "2024-08-25",
      outstanding: 89000,
    },
    {
      id: 3,
      name: "Marketing Pros",
      status: "Good",
      lastPayment: "2024-09-10",
      outstanding: 72000,
    },
    {
      id: 4,
      name: "Facility Management LLC",
      status: "Good",
      lastPayment: "2024-08-30",
      outstanding: 58000,
    },
    {
      id: 5,
      name: "Legal Services Group",
      status: "Good",
      lastPayment: "2024-09-05",
      outstanding: 45000,
    },
  ];

  return (
    <VStack align="stretch" className="space-y-4">
      {vendors.map((vendor) => (
        <Card key={vendor.id}>
          <CardContent className="p-4">
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold">{vendor.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  Status: {vendor.status} | Last Payment: {vendor.lastPayment}
                </Text>
              </Box>
              <Box textAlign="right">
                <Text fontWeight="bold">${vendor.outstanding.toLocaleString()}</Text>
                <Text fontSize="sm" color="gray.500">
                  Total Outstanding
                </Text>
              </Box>
            </Flex>
          </CardContent>
        </Card>
      ))}
    </VStack>
  );
}
