/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.*/

function timeConversion(s) {
    let hour = s.substring(0, 2);
    let rest = s.substring(2, 8);

    let letters = s.substring(8);


    if (letters === 'PM') {
        if (hour === '01') {
            hour = '13';
        } else if (hour === '02') {
            hour = '14';
        } else if (hour === '03') {
            hour = '15';
        } else if (hour === '04') {
            hour = '16';
        } else if (hour === '05') {
            hour = '17';
        } else if (hour === '06') {
            hour = '18';
        } else if (hour === '07') {
            hour = '19';
        } else if (hour === '08') {
            hour = '20';
        } else if (hour === '09') {
            hour = '21';
        } else if (hour === '10') {
            hour = '22';
        } else if (hour === '11') {
            hour = '23';
        }
    } else if (letters === 'AM') {
        if (hour === '12') {
            hour = '00';
        }
    }


    console.log(hour + rest);
}

timeConversion('07:05:45PM');
timeConversion('12-00-01AM');
timeConversion('11-00-01PM');