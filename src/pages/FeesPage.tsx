import React from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getStudentFees, getStudentInvoices } from '@/lib/mock-data';
import { Student } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import DataTable, { Column } from '@/components/shared/DataTable';
import { Fee } from '@/lib/types';

const FeesPage = () => {
  const { user } = useAuth();
  const student = user as Student;

  // Get student's fees and invoices
  const fees = getStudentFees(student.id);
  const invoices = getStudentInvoices(student.id);

  // Calculate totals
  const totalBalance = fees
    .filter(f => f.status === 'pending' || f.status === 'overdue')
    .reduce((sum, f) => sum + f.amount, 0);
  
  const totalPaid = fees
    .filter(f => f.status === 'paid')
    .reduce((sum, f) => sum + f.amount, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-success text-white">Paid</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-destructive text-white">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const feeColumns: Column<Fee>[] = [
    {
      key: 'description',
      header: 'Description',
      sortable: true,
    },
    {
      key: 'amount',
      header: 'Amount',
      sortable: true,
      render: (item) => `$${item.amount.toFixed(2)}`,
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      sortable: true,
      render: (item) => item.dueDate.toLocaleDateString(),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item) => getStatusBadge(item.status),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fees & Payments</h1>
        <p className="text-gray-600">Manage your tuition and fees</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              {totalBalance > 0 ? (
                <AlertCircle className="h-4 w-4 text-warning" />
              ) : (
                <CheckCircle className="h-4 w-4 text-success" />
              )}
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-4xl font-bold ${totalBalance > 0 ? 'text-warning' : 'text-success'}`}>
              ${totalBalance.toFixed(2)}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {totalBalance > 0 ? 'Payment Due' : 'Account in Good Standing'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gray-900">${totalPaid.toFixed(2)}</div>
            <p className="text-sm text-gray-600 mt-2">This Academic Year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-accent hover:bg-navy gap-2" disabled={totalBalance === 0}>
              <CreditCard className="h-4 w-4" />
              Make Payment
            </Button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Credit/Debit, Bank Transfer
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fee Details */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Fee Details</CardTitle>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            data={fees}
            columns={feeColumns}
            searchable
            searchPlaceholder="Search fees..."
            pageSize={10}
            emptyMessage="No fees found"
          />
        </CardContent>
      </Card>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          {invoices.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No invoices available</p>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {invoices.map((invoice) => (
                <AccordionItem key={invoice.id} value={invoice.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="text-left">
                        <p className="font-semibold">
                          {invoice.term} {invoice.year}
                        </p>
                        <p className="text-sm text-gray-600">
                          Due: {invoice.dueDate.toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${invoice.totalAmount.toFixed(2)}</p>
                        {getStatusBadge(invoice.status)}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-4">
                      {invoice.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.description}</span>
                          <span className="font-medium">${item.amount.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total Amount</span>
                          <span>${invoice.totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>Paid Amount</span>
                          <span>${invoice.paidAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg mt-2">
                          <span>Balance</span>
                          <span className={invoice.balanceAmount > 0 ? 'text-warning' : 'text-success'}>
                            ${invoice.balanceAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesPage;
