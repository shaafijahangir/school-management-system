
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';

interface InvoiceRowProps {
  description: string;
  charge: string;
  payment: string;
}

const InvoiceRow: React.FC<InvoiceRowProps> = ({ description, charge, payment }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{description}</TableCell>
      <TableCell className="text-right">{charge}</TableCell>
      <TableCell className="text-right text-green-600">{payment}</TableCell>
    </TableRow>
  );
};

export default InvoiceRow;
