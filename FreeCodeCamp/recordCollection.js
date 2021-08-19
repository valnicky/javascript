// Setup
/*You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.

After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.

After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide */
// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    records = recordCollection;
    Object.keys(records).forEach(key => {
        //console.log(key);

        if (key == id) {
            const obj2 = records[key];
            // console.log(obj2);
            Object.keys(obj2).forEach(key2 => { //console.log(key2);

                let val = obj2[key2];
                if (value === '') {
                    delete obj2[prop];

                } else if ((prop != 'tracks') && (val != '')) {
                    val = value;
                    //console.log(value);
                    const newObj = {}
                    newObj[prop] = value;

                    //console.log(newObj);
                    Object.assign(obj2, newObj);
                } else if ((prop == 'tracks') && (val != '')) {

                    const newObj2 = {}
                    newObj2["tracks"] = [value];
                    //console.log(newObj2);

                    if (obj2[prop] == null) {
                        Object.assign(obj2, newObj2);
                    } else if (obj2[prop] != null) {
                        if (!obj2[prop].includes(value)) {
                            obj2[prop].push(value);
                        }

                    }
                }


            });


        }
    });

    // console.log(records);
    return records;
}
updateRecords(recordCollection, 2548, "artist", "");