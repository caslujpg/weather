import { Location as LocationRD } from 'react-router-dom';

export interface Location<T> extends Omit<LocationRD, 'state'> {
    state: T;
}