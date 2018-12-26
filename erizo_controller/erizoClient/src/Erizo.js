import Room from './Room';
import { LicodeEvent, RoomEvent, StreamEvent } from './Events';
import Stream from './Stream';
import Logger from './utils/Logger';

import OldErizo from './OldErizo';

// eslint-disable-next-line 
//require('expose-loader?adapter!../lib/adapter.js');
// eslint-disable-next-line
require('script-loader!./utils/L.Resizer.js');


const NewErizo = {
  Room: Room.bind(null, undefined, undefined, undefined),
  LicodeEvent,
  RoomEvent,
  StreamEvent,
  Stream: Stream.bind(null, undefined),
  Logger,
};

const ErizoFactory = (version = '1') => {
  switch(version) {
    case '2':
      return NewErizo;
    case '1':
    default:
      return OldErizo;
  }
}

export default ErizoFactory;
