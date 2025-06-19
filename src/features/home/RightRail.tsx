
import React from 'react';
import TerritoryAcknowledgment from './TerritoryAcknowledgment';
import AnnouncementAccordion from './AnnouncementAccordion';
import EmailPreferences from './EmailPreferences';

const RightRail = () => {
  return (
    <div className="space-y-6">
      <TerritoryAcknowledgment />
      <AnnouncementAccordion />
      <EmailPreferences />
    </div>
  );
};

export default RightRail;
