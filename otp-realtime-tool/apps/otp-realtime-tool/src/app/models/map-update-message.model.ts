import { LatLon } from './latlon.model';

export interface MapUpdateMessage {
  coordinate: LatLon;
  messageType: string;
}
