import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faMinusCircle,
    faCircleNotch,
    faAtom,
    faMobileAlt,
    faEnvelopeOpenText,
    faMapPin,
    faLock
 } from '@fortawesome/free-solid-svg-icons';

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faCircleNotch, faAtom, faMobileAlt, faEnvelopeOpenText, faMapPin, faLock);
}

export default Icons;