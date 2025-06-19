
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const TerritoryAcknowledgment = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          Territory Acknowledgement
          <ChevronDown className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 mb-4">
          We acknowledge and respect the Lək̓ʷəŋən (Songhees and 
          Xʷsepsum/Esquimalt) Peoples on whose territory the university stands, 
          and the Lək̓ʷəŋən and W̱SÁNEĆ Peoples whose historical relationships 
          with the land continue to this day.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">▶️</div>
            <div className="text-sm">Territory acknowledgement - University of Victoria</div>
            <div className="text-xs mt-1">Watch later • Share</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TerritoryAcknowledgment;
