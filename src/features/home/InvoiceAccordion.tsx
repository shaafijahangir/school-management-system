
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import InvoiceRow from './InvoiceRow';

interface TermInvoice {
  term: string;
  items: Array<{
    description: string;
    charge: string;
    payment: string;
  }>;
}

const mockInvoices: TermInvoice[] = [
  {
    term: 'Winter 2025',
    items: [
      { description: 'Tuition - Undergraduate', charge: '$2,847.50', payment: '-$2,847.50' },
      { description: 'Student Fees', charge: '$425.00', payment: '-$425.00' },
      { description: 'Health Plan', charge: '$285.00', payment: '-$285.00' },
      { description: 'Parking Permit', charge: '$180.00', payment: '-$180.00' }
    ]
  },
  {
    term: 'Fall 2024',
    items: [
      { description: 'Tuition - Undergraduate', charge: '$2,847.50', payment: '-$2,847.50' },
      { description: 'Student Fees', charge: '$425.00', payment: '-$425.00' },
      { description: 'Lab Fee - Computer Science', charge: '$75.00', payment: '-$75.00' },
      { description: 'Technology Fee', charge: '$150.00', payment: '-$150.00' }
    ]
  }
];

const InvoiceAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {mockInvoices.map((invoice, index) => (
        <AccordionItem key={index} value={`term-${index}`}>
          <AccordionTrigger className="text-left">
            {invoice.term}
          </AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Charge</TableHead>
                  <TableHead className="text-right">Payment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.map((item, itemIndex) => (
                  <InvoiceRow
                    key={itemIndex}
                    description={item.description}
                    charge={item.charge}
                    payment={item.payment}
                  />
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default InvoiceAccordion;
