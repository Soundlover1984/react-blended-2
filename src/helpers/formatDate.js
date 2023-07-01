import { formatDistanceToNow } from 'date-fns';

export function getFormattingDistanceToNow(date) { 
    return formatDistanceToNow(new Date(date), {addSuffix: true})
};
