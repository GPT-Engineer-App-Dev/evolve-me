import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Your App</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">This is a bare-bones application. Start building your features here.</p>
          <Button variant="outline">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;