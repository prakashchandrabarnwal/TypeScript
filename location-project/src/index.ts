import { User } from './User';
import { Company } from './company';
import { CustomMap } from './customMap';

const customMap = new CustomMap('map');

const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

