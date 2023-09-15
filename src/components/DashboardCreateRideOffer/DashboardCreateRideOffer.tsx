import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DashboardCreateRideOffer.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const DashboardCreateRideOffer: FC<Props> = memo(function DashboardCreateRideOffer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes._2023UNTRides}>© 2023 UNT Rides</div>
      <div className={classes.backgroundImage}></div>
      <div className={classes.dashboardUserInteraction}></div>
      <div className={classes.miniNavBorder}></div>
      <div className={classes.availableRidesCreateRideOfferM}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Available Rides </span>
          <span className={classes.label2}>Create Ride Offer</span>
          <span className={classes.label3}> My Rides</span>
        </p>
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.searchRides}>Search rides</div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.availableSeats}> Available seats</div>
      <div className={classes.date}> mm/dd/yyy</div>
      <div className={classes.destination}> Destination</div>
      <div className={classes.terminal}> Terminal</div>
      <div className={classes.name}> Name</div>
      <div className={classes.navBarRectangle}></div>
      <div className={classes.profileSignOut}>Profile Sign out</div>
      <div className={classes.uNTRidesLogo1}></div>
      <div className={classes.submitRideOffer}>Submit Ride Offer</div>
    </div>
  );
});
