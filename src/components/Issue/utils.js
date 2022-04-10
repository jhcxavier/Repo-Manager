import format from 'date-fns/format';

export const formatAsDate = (value, ignoreTimezone, isoFormat) => {
    if (!value) {
        return value;
    }
    value = new Date(value);
    if (value.getUTCFullYear() < 1970) {
        return null;
    }
    if (ignoreTimezone) {
        if (isoFormat) {
            return (
                value.getUTCFullYear() +
                '-' +
                ('0' + (value.getUTCMonth() + 1)).slice(-2) +
                '-' +
                ('0' + value.getUTCDate()).slice(-2)
            );
        } else {
            return (
                ('0' + (value.getUTCMonth() + 1)).slice(-2) +
                '/' +
                ('0' + value.getUTCDate()).slice(-2) +
                '/' +
                value.getUTCFullYear()
            );
        }
    } else {
        return format(new Date(value), 'MM/dd/yyyy');
    }
};

export const lastUpdate = (date1, date2) => {

    date2 = new Date(date2);
    const diffTime = Math.abs(date2 - new Date(date1));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffTimeHours = Math.ceil(diffTime / (1000 * 60 * 60));
    
    if (diffTimeHours > 24) {
        return diffDays >= 1 ? `${diffDays} days ago` : `${diffDays} day ago`
    } else {
        return diffTimeHours >= 1 ? `${diffTimeHours} hours ago` : `${diffTimeHours} hour ago`
    }
}