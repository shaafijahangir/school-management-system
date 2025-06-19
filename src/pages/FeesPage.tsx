
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import InvoiceAccordion from '@/features/home/InvoiceAccordion';

const FeesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Fees & Invoices</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Account Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$0.00</div>
                  <div className="text-lg text-gray-600">Current Balance</div>
                  <div className="text-sm text-gray-500 mb-4">Account in Good Standing</div>
                  <Button disabled className="w-full">
                    Make Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Invoice History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Invoice History</CardTitle>
              </CardHeader>
              <CardContent>
                <InvoiceAccordion />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
